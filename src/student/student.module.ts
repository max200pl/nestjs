import { StudentController } from "./student.controller";
import { Module } from "@nestjs/common";
import { StudentService } from "./student.service";

@Module({
  providers: [StudentService],
  controllers: [StudentController],
  exports: [StudentService],
})
export class StudentsModule {}
