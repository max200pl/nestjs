import {
  FindStudentResponseDto,
  StudentResponseDto,
} from "./../student/dto/find-student-response.dto";
import { Controller, Get, Param, Put } from "@nestjs/common";

@Controller("teachers/:teacherId/students")
export class StudentTeacherController {
  @Get()
  getStudents(@Param("teacherId") teacherId: string): FindStudentResponseDto[] {
    return `Get all students that belong to the Teacher with an id of ${teacherId}`;
  }

  @Put("/:studentId")
  updateStudentTeacher(
    @Param("teacherId") teacherId: string,
    @Param("studentId") studentId: string
  ): StudentResponseDto {
    return `Update Student with Id of ${studentId} to Teacher With Id of ${teacherId}`;
  }
}
