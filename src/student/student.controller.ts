import { Body, Controller, Get, Post, Put } from "@nestjs/common";

@Controller("students")
export class StudentController {
  @Get()
  getStudents() {
    return "All Students";
  }

  @Get("/:studentId")
  getStudentsById() {
    return;
  }

  @Post()
  cerateStudent() {
    return "Get student";
  }

  @Put("/:studentId")
  updateStudent() {
    return "Update student";
  }
}
