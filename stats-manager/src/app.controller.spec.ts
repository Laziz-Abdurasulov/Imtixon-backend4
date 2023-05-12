import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppService', () => {
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    appService = app.get<AppService>(AppService);
  });

  describe('getStats', () => {
    it('Should return an empty list of stats', async () => {

      expect(await appService.getStats()).toEqual([]);
    });
    it('Should return an item from a list of stats containing date, views, clicks, cost and id', async () => {

      const data = {
        "date": "2020-01-01T00:00:00.000Z",
        "views": 1,
        "clicks": 1,
        "cost": 1
      };
      const dataItem2 = {
        "date": "2021-11-13T00:00:00.000Z",
        "views": 100,
        "clicks": 3,
        "cost": 21
      }
      await appService.setStats(data);
      await appService.setStats(dataItem2);

      let result = await appService.getStats()
      expect(result[1].date).toEqual(new Date('2021-11-13T00:00:00.000Z'));
    });
  });

  describe('getStatsRange', () => {
    it('Should return an empty list of stats', async () => {
      const rangeItem = {};

      expect(await appService.getStatsRange(rangeItem)).toEqual([]);
    });
    it('Should return an empty list of stats if stats are present but empty parameter given', async () => {
      const data = {
        "date": "2020-01-01T00:00:00.000Z",
        "views": 1,
        "clicks": 1,
        "cost": 1
      };
      const dataItem2 = {
        "date": "2021-11-13T00:00:00.000Z",
        "views": 100,
        "clicks": 3,
        "cost": 21
      }
      await appService.setStats(data);
      await appService.setStats(dataItem2);

      const rangeItem = {};

      expect(await appService.getStatsRange(rangeItem)).toEqual([]);
    });
    it('Should return an empty list of stats if stats are present but items in parameter are null', async () => {
      const data = {
        "date": "2020-01-01T00:00:00.000Z",
        "views": 1,
        "clicks": 1,
        "cost": 1
      };
      const dataItem2 = {
        "date": "2021-11-13T00:00:00.000Z",
        "views": 100,
        "clicks": 3,
        "cost": 21
      }
      await appService.setStats(data);
      await appService.setStats(dataItem2);

      const rangeItem = { startDate: null, endDate: null };

      expect(await appService.getStatsRange(rangeItem)).toEqual([]);
    });
    it('Should return an empty list of stats if stats are present but items in parameter are empty strings', async () => {
      const data = {
        "date": "2020-01-01T00:00:00.000Z",
        "views": 1,
        "clicks": 1,
        "cost": 1
      };
      const dataItem2 = {
        "date": "2021-11-13T00:00:00.000Z",
        "views": 100,
        "clicks": 3,
        "cost": 21
      }
      await appService.setStats(data);
      await appService.setStats(dataItem2);

      const rangeItem = { startDate: "", endDate: "" };

      expect(await appService.getStatsRange(rangeItem)).toEqual([]);
    });
    it('Should return a list of stats between the dates "2019-01-01" and "2020-11-13"', async () => {
      const data = {
        "date": "2020-01-01T00:00:00.000Z",
        "views": 1,
        "clicks": 1,
        "cost": 1
      };
      const dataItem2 = {
        "date": "2021-11-13T00:00:00.000Z",
        "views": 100,
        "clicks": 3,
        "cost": 21
      }
      await appService.setStats(data);
      await appService.setStats(dataItem2);

      const rangeItem = { startDate: "2019-01-01", endDate: "2020-11-13" };

      const response = await appService.getStatsRange(rangeItem);
      expect(response[0].date).toEqual(new Date("2020-01-01T00:00:00.000Z"));
    });
    it('Should return an empty list of stats when the end date is "2020-11-13" and start date is "2019-01-01"', async () => {
      const data = {
        "date": "2020-01-01T00:00:00.000Z",
        "views": 1,
        "clicks": 1,
        "cost": 1
      };
      const dataItem2 = {
        "date": "2021-11-13T00:00:00.000Z",
        "views": 100,
        "clicks": 3,
        "cost": 21
      }
      await appService.setStats(data);
      await appService.setStats(dataItem2);

      const rangeItem = { endDate: "2019-01-01", startDate: "2020-11-13" };
      expect(await appService.getStatsRange(rangeItem)).toEqual([]);
    });
  })

  describe('setStats', () => {
    it('Should return an empty list of stats', async () => {
      await appService.setStats({});
      expect(await appService.getStats()).toEqual([]);
    });
    it('Should return an item from a list of stats containing date, views, clicks, cost and id', async () => {

      const data = {
        "date": "2020-01-01T00:00:00.000Z",
        "views": 1,
        "clicks": 1,
        "cost": 1
      };
      const dataItem2 = {
        "date": "2021-11-13T00:00:00.000Z",
        "views": 100,
        "clicks": 3,
        "cost": 21
      }
      await appService.setStats(data);
      await appService.setStats(dataItem2);

      let result = await appService.getStats()
      expect(result[1].date).toEqual(new Date('2021-11-13T00:00:00.000Z'));
    });
  });
  describe('clearStats', () => {
    it('Should return an empty list of stats', async () => {
      await appService.clearStats();
      expect(await appService.getStats()).toEqual([]);
    });
    it('Should return an empty list of stats after 2 sets of stats have been added', async () => {

      const data = {
        "date": "2020-01-01T00:00:00.000Z",
        "views": 1,
        "clicks": 1,
        "cost": 1
      };
      const dataItem2 = {
        "date": "2021-11-13T00:00:00.000Z",
        "views": 100,
        "clicks": 3,
        "cost": 21
      }
      await appService.setStats(data);
      await appService.setStats(dataItem2);

      await appService.clearStats()
      expect(await appService.getStats()).toEqual([]);
    });
  });
});
