import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AppService {
  private statsList: any[] = [];

  getStats() {
    return this.statsList;
  }

  getStatsRange(rangeItem) {
    var filteredList = [];
    if (Object.keys(rangeItem).length !== 0) {
      if (rangeItem.startDate && rangeItem.endDate) {
        let dateStartArr = rangeItem.startDate.split('-');
        let formattedStartDate = new Date(parseInt(dateStartArr[0]), parseInt(dateStartArr[1]) - 1, parseInt(dateStartArr[2]) + 1);

        let dateEndArr = rangeItem.endDate.split('-');
        let formattedEndDate = new Date(parseInt(dateEndArr[0]), parseInt(dateEndArr[1]) - 1, parseInt(dateEndArr[2]) + 1);

        this.statsList.forEach(stat => {
          if (formattedEndDate >= stat.date && formattedStartDate <= stat.date) {
            filteredList.push(stat);
          }
        });
      }
    }

    return filteredList;
  }

  setStats(data) {
    if (Object.keys(data).length !== 0) {
      data.id = uuidv4();
      data.date = new Date(data.date);
      this.statsList.push(data);
    }
  }

  clearStats() {
    this.statsList = [];
  }

}
