import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Tag } from './tag.entity';

@Entity({
  name: 'adverts',
})
export class Advert {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  name: string;

  @Column({
    default: 0,
    type: 'float',
  })
  price: number;

  @Column({
    default: 1,
  })
  count: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @ManyToMany((type) => Tag)
  @JoinTable({
    name: 'adverts_tags',
    joinColumn: {
      name: 'advertId',
    },
    inverseJoinColumn: {
      name: 'tagId',
    },
  })
  tags: Tag[];

  @Column({
    type: 'text',
    nullable: true,
  })
  description: string;
}
