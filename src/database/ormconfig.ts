import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// export const ormconfig: TypeOrmModuleOptions = {
//   type: 'postgres',
//   host: '127.0.0.1',
//   port: 5432,
//   username: 'wolfi',
//   password: 'Shayan5262',
//   database: 'mediumclone',
//   autoLoadEntities: true,
//   synchronize: false,
// };

export const ormconfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  autoLoadEntities: true,
  synchronize: false,
};
