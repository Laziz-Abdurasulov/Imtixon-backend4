import { Injectable } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { Advert } from './adverts.entity';

@Injectable()
export class ProductRepository extends Repository<Advert> {
  constructor(private dataSource: DataSource) {
    super(Advert, dataSource.createEntityManager());
  }
}
