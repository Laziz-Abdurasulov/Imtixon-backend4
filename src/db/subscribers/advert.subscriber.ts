import {
  EventSubscriber,
  EntitySubscriberInterface,
  InsertEvent,
  UpdateEvent,
  RemoveEvent,
} from 'typeorm';
import { Advert } from '../../adverts/db/adverts.entity';

@EventSubscriber()
export class ProductSubscriber implements EntitySubscriberInterface<Product> {
  listenTo(): any {
    return Product;
  }

  beforeInsert(event: InsertEvent<Product>): void {
    console.log(`BEFORE INSERT NEW PRODUCT: `, event.entity);
    return null;
  }

  afterInsert(event: InsertEvent<Product>): void {
    console.log(`AFTER INSERT NEW PRODUCT: `, event.entity);
  }

  beforeUpdate(event: UpdateEvent<Product>): void {
    console.log(`BEFORE UPDATE PRODUCT: `, event.entity);
  }

  afterUpdate(event: UpdateEvent<Product>): void {
    console.log(`AFTER UPDATE PRODUCT: `, event.entity);
  }

  beforeRemove(event: RemoveEvent<Product>): void {
    console.log(`BEFORE REMOVE PRODUCT: `, event.entity);
  }

  afterRemove(): void {
    console.log(`AFTER REMOVE PRODUCT: `);
  }

  afterLoad(): void {
    console.log('AFTER LOAD PRODUCTS');
  }
}
