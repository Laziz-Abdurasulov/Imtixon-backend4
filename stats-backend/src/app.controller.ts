import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { AppService } from './app.service';
import { CreateStatRequest } from './Dto/create-stat-request';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }


  @Put('advert/:id')
  setStat(@Body() createStatRequest: CreateStatRequest) {
    try {
      return this.appService.setStats(createStatRequest);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.PRECONDITION_FAILED);
    }
  }

  @Get('advert')
  getStats() {
    return this.appService.getStats();
  }

  @Get('advert/:startDate/:endDate')
  getStatsRange(@Param('startDate') startDate: Date, @Param('endDate') endDate: Date) {
    return this.appService.getStatsRange(startDate, endDate);
  }

  @Post('advert')
  setStats(@Body() createStatRequest: CreateStatRequest) {
    try {
      return this.appService.setStats(createStatRequest);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.PRECONDITION_FAILED);
    }
  }

  @Post('advert/clear')
  clearStats() {
    return this.appService.clearStats();
  }

}
