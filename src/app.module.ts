import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewModule } from '@/review/review.module';
import { Review } from '@/review/entity/review.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'alstn6319438664',
      database: 'nest-test',
      entities: [Review],
      synchronize: true,
    }),

    ReviewModule,
  ],
})
export class AppModule {}
