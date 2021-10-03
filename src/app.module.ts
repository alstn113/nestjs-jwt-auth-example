import { Module } from '@nestjs/common';
import { StudentModule } from '@/student/student.module';
import { TeacherModule } from '@/teacher/teacher.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../ormconfig';
import { Product } from '@/product/entity/product.entity';
import { ProductModule } from '@/product/product.module';

@Module({
  imports: [
    StudentModule,
    TeacherModule,
    ProductModule,
    TypeOrmModule.forRoot(config),
    TypeOrmModule.forFeature([Product]),
  ],
})
export class AppModule {}
