import { Body, Controller, Get, Post, Put, Param } from "@nestjs/common";
import { json } from "express";

@Controller("students")
export class StudentController {
  @Get()
  getStudents() {
    return "All Students";
  }

  @Get("/:studentId")
  getStudentsById(@Param("studentId") studentId: string) {
    return `Get Student Whit Id of ${studentId}`;
  }

  @Post()
  cerateStudent(@Body() body) {
    return `Get student ${JSON.stringify(body)}`; // ${JSON.stringify(body)} ==> получить данные в строковом представлении
  }

  @Put("/:studentId")
  updateStudent(@Param("studentId") studentId: string, @Body() body) {
    return `Update student With Id of ${studentId} With Data of ${JSON.stringify(
      body
    )} `;
  }
}
