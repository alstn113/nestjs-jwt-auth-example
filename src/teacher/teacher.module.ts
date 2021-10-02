import { Module } from '@nestjs/common';
import { StudentModule } from '@/student/student.module';
import { TeacherController } from '@/teacher/teacher.controller';
import { StudentTeacherController } from '@/teacher/student.controller';
import { TeacherService } from '@/teacher/teacher.service';

@Module({
  imports: [StudentModule],
  controllers: [TeacherController, StudentTeacherController],
  providers: [TeacherService],
})
export class TeacherModule {}
