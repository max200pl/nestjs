import { StudentController } from "./student.controller";
import { Module } from "@nestjs/common";

@Module({
  providers: [],
  controllers: [StudentController],
})
export class StudentsModule {}
