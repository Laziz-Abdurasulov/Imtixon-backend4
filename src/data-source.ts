import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  name: 'default',
  type: 'postgres',
  host: 'localhost',
  port: 3796,
  username: 'postgres',
  password: '11',
  database: 'imtixon4',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
  dropSchema: false,
  migrationsRun: true,
  migrations: ['dist/db/migrations/**/*{.ts,.js}'],

  subscribers: [__dirname + '/db/subscribers/**/*{.ts,.js}'],
};

const dataSource = new DataSource(dataSourceOptions);
dataSource.initialize();

export default dataSource;
