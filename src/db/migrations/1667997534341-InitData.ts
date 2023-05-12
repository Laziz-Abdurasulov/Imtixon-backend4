import { Tag } from '../../adverts/db/tag.entity';

import { faker } from '@faker-js/faker';


import dataSource from '../../data-source';
import { Advert } from '../../adverts/db/adverts.entity';
import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';

export class $InitData1667997534341 implements MigrationInterface {

  private async saveTags(): Promise<Tag[]> {
    const tagsArr: Tag[] = [];
    const tags = [
      {
        name: 'NEW',
      },
      {
        name: 'PROMO',
      },
      {
        name: 'LAST_ITEMS',
      },
    ];

    for (const tag of tags) {
      const tagToSave = new Tag();
      tagToSave.name = tag.name;
      tagsArr.push(await dataSource.getRepository(Tag).save(tagToSave));
    }

    console.log('Tags saved');

    return tagsArr;
  }

  private async randomTags(tags: Tag[]): Promise<Tag[]> {
    const opt = Math.floor(Math.random() * tags.length);
    const tagArr: Tag[] = [];

    for (let i = 0; i < opt; i++) {
      const tag = tags[Math.floor(Math.random() * tags.length)];
      if (!tagArr.includes(tag)) {
        tagArr.push(tag);
      }
    }

    console.log(tagArr);

    return tagArr;
  }

  private async saveProducts(tags: Tag[]): Promise<void> {
    const adverts: Advert[] = [];

    for (let i = 0; i < 101; i++) {
      const advert = {
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.datatype.number({ precision: 0.01 }),
        count: faker.datatype.number(100),
        tags: await this.randomTags(tags),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
      };
      adverts.push(advert);
    }

    await dataSource.getRepository(Advert).save(adverts);

    console.log('advert saved');
  }






  public async down(queryRunner: QueryRunner): Promise<void> { }
}
