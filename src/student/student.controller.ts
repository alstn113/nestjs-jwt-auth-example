import { Body, Controller, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import {
  CreateStudentDto,
  FindStudentsResponseDto,
  StudentResponseDto,
  UpdateStudentDto,
} from '@/student/dto/student.dto';
import { StudentService } from '@/student/student.service';

@Controller('students')
export class StudentContorller {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudents(): FindStudentsResponseDto[] {
    return this.studentService.getStudents();
  }

  @Get('/:studentId')
  getStudentbyId(
    @Param('studentId', new ParseUUIDPipe()) studentId: string,
  ): FindStudentsResponseDto {
    return this.getStudentbyId(studentId);
  }

  @Post()
  createStudent(@Body() body: CreateStudentDto): StudentResponseDto {
    return this.createStudent(body);
  }

  @Put('/:studentId')
  updateStudent(
    @Param('studentId', new ParseUUIDPipe()) studentId: string,
    @Body() body: UpdateStudentDto,
  ) {
    return this.studentService.updateStudent(body, studentId);
  }
}
