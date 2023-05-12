import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { isInt, isNumber, isString } from 'class-validator';
import { CreateStatRequest } from './Dto/create-stat-request';
import { CreateStatEvent } from './Event/create-stat-event';

@Injectable()
export class AppService {
  constructor(@Inject('STATISTICS') private readonly statisticsClient: ClientProxy) { }

  getStats() {
    console.log('getStats - Nimadir qaytishi kerak edi😥');

    return this.statisticsClient.send({ cmd: 'get_statistics' }, {});
  }

  getStatsRange(startDate, endDate) {

    let localeStartDate = new Date(startDate).toLocaleDateString('en-CA');
    let localeEndDate = new Date(endDate).toLocaleDateString('en-CA');

    let rangeItem = { startDate: localeStartDate, endDate: localeEndDate };

    console.log('getStatsRange - fetching all stats between a range:', rangeItem);

    return this.statisticsClient.send({ cmd: 'get_statistics_range' }, rangeItem);
  }

  setStats(data: CreateStatRequest) {
    console.log('setStats - Setting statistics for ', data);

    let formattedDate = new Date(data.date).toLocaleDateString('en-CA');

    if (formattedDate == data.date.toString()) {
      if (isNumber(data.views) && isNumber(data.clicks) && isNumber(data.cost)) {
        this.statisticsClient.emit(
          'create_stat',
          new CreateStatEvent(data.date, data.views, data.clicks, data.cost)
        );
      } else {
        throw new RpcException('Invalid data format. Please ensure that views, clicks and cost are all numbers');
      }
    } else {
      throw new RpcException('Invalid Date format. Please ensure the date is correct and in the format yyyy-MM-dd');
    }
  }

  setStat(data: CreateStatRequest) {
    console.log('setStats - Setting statistics for ', data);

    let formattedDate = new Date(data.date).toLocaleDateString('en-CA');

    if (formattedDate == data.date.toString()) {
      if (isNumber(data.views) && isNumber(data.clicks) && isNumber(data.cost)) {
        this.statisticsClient.emit(
          'create_stat',
          new CreateStatEvent(data.date, data.views, data.clicks, data.cost)
        );
      } else {
        throw new RpcException('Invalid data format. Please ensure that views, clicks and cost are all numbers');
      }
    } else {
      throw new RpcException('Invalid Date format. Please ensure the date is correct and in the format yyyy-MM-dd');
    }
  }

  clearStats() {
    console.log('clearStats - clearing statistics ');
    this.statisticsClient.emit('clear_stats', {});
  }
}
