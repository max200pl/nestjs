import { StudentController } from "./student.controller";
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from "@nestjs/common";
import { StudentService } from "./student.service";
import { ValidStudentMiddleware } from "src/common/middleware/validStudent.middleware";

@Module({
  providers: [StudentService],
  controllers: [StudentController],
  exports: [StudentService],
})
export class StudentsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ValidStudentMiddleware).forRoutes({
      path: "students/:studentId",
      method: RequestMethod.GET,
    });
    consumer.apply(ValidStudentMiddleware).forRoutes({
      path: "students/:studentId",
      method: RequestMethod.PUT,
    });
  }
}
