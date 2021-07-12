import { StudentsModule } from "./../student/student.module";
import { TeacherController } from "./teacher.controller";
import { StudentTeacherController } from "./student.controller";

import { Module } from "@nestjs/common";
import { TeacherService } from "./teacher.service";

@Module({
  imports: [StudentsModule],
  providers: [TeacherService],
  controllers: [StudentTeacherController, TeacherController],
})
export class TeacherModule {}
