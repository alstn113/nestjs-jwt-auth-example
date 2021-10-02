import { Injectable, NestMiddleware, HttpException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { students } from '@/db';

@Injectable()
export class ValidStudentMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Middleware Called');
    const studentId = req.params.studentId;
    const studentExists = students.some((student) => {
      return student.id === studentId;
    }); // some은 모든 요소가 다 통과하는지 boolean 값 반환
    if (!studentExists) {
      throw new HttpException('Student not found', 400);
    }
    next();
  }
}
