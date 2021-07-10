import { Controller, Get, Put } from "@nestjs/common";

@Controller("/:teacherId/students")
export class StudentTeacherController {
  @Get()
  getStudents() {
    return "Get all students that belong to a Teacher";
  }

  @Put("/:studentId")
  updateStudentTeacher() {
    return "Update Student Teacher";
  }
}
