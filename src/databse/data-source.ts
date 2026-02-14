import 'reflect-metadata';
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const toBool = (v?: string) => v === 'true' || v === '1';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST ?? '127.0.0.1',
  port: Number(process.env.DB_PORT ?? 5432),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,

  entities: [path.join(__dirname, '/../**/*.entity{.ts,.js}')],
  migrations: [path.join(__dirname, '/../migrations/*{.ts,.js}')],

  synchronize: toBool(process.env.DB_SYNC), // dev only
  ssl: toBool(process.env.DB_SSL) ? { rejectUnauthorized: false } : false,
});
