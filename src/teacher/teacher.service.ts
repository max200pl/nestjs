import { Injectable } from "@nestjs/common";
import { FindTeacherResponseDto } from "./dto/teacher.dto";

@Injectable()
export class TeacherService {
  getTeachers(): FindTeacherResponseDto[] {
    return;
  }

  getTeacherById(teacherId: string): FindTeacherResponseDto {
    return;
  }
}
