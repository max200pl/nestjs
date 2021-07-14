import {
  FindStudentResponseDto,
  StudentResponseDto,
} from "./dto/find-student-response.dto";
import { UpdateStudentDto } from "./dto/update-student.dto";
import { CreateStudentDto } from "./dto/create-student.dto";
import { Body, Controller, Get, Post, Put, Param } from "@nestjs/common";

@Controller("students")
export class StudentController {
  @Get()
  getStudents(): FindStudentResponseDto[] {
    return;
  }

  @Get("/:studentId")
  getStudentsById(
    @Param("studentId") studentId: string
  ): FindStudentResponseDto {
    return `Get Student Whit Id of ${studentId}`;
  }

  @Post()
  cerateStudent(@Body() body: CreateStudentDto): StudentResponseDto {
    return `Get student ${JSON.stringify(body)}`; // ${JSON.stringify(body)} ==> получить данные в строковом представлении
  }

  @Put("/:studentId")
  updateStudent(
    @Param("studentId") studentId: string,
    @Body() body: UpdateStudentDto
  ): StudentResponseDto {
    return `Update student With Id of ${studentId} With Data of ${JSON.stringify(
      body
    )} `;
  }
}
