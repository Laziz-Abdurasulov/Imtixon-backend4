import { Controller, Get } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @MessagePattern({cmd:'get_statistics'})
  getStats(){
    return this.appService.getStats();
  }

  @MessagePattern({ cmd: 'get_statistics_range' })
  getStatsRange(rangeItem){
    return this.appService.getStatsRange(rangeItem);
  }

  @EventPattern('create_stat')
  setStats(data){
    this.appService.setStats(data);
  }

  @EventPattern('clear_stats')
  clearStat(){
    this.appService.clearStats();
  }

}
