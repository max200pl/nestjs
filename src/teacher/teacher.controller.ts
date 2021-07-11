import { FindTeacherResponseDto } from "./dto/teacher.dto";
import { Controller, Get, Param, Put } from "@nestjs/common";

@Controller("teachers")
export class TeacherController {
  @Get()
  getTeachers(): FindTeacherResponseDto {
    return "all teacher";
  }

  @Get("/:teacherId")
  getTeacherById(
    @Param("teacherId") teacherId: string
  ): FindTeacherResponseDto {
    return `Get Teacher By ID ${teacherId}`;
  }
}
