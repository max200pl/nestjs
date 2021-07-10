import { TeacherController } from "./teacher.controller";
import { StudentTeacherController } from "./student.controller";

import { Module } from "@nestjs/common";

@Module({
  providers: [],
  controllers: [StudentTeacherController, TeacherController],
})
export class TeacherModule {}
