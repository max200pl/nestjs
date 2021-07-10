import { Controller, Get, Put } from "@nestjs/common";

@Controller("teachers")
export class TeacherController {
  @Get()
  getTeachers() {
    return "all teacher";
  }

  @Get("/:teacherId")
  getTeacherById() {
    return "Get Teacher By ID";
  }
}
