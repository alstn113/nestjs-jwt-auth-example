import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

const config: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'alstn6319438664',
  database: 'nest-test',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};

export default config;
