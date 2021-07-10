import { StudentsModule } from "./student/student.module";
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ProductsModule } from "./products/products.module";
import { TeacherController } from "./teacher/teacher.controller";
import { TeacherModule } from "./teacher/teacher.module";

@Module({
  imports: [
    StudentsModule,
    TeacherModule,
    ProductsModule,
    MongooseModule.forRoot(
      `mongodb+srv://max200pl:29121994mO111@cluster0.bmnyz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
    ),
  ],
  controllers: [AppController, TeacherController],
  providers: [AppService],
})
export class AppModule {}
