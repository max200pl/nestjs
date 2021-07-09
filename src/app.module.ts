import { Module } from "@nestjs/common";
import { ProductsModule } from "./products/products.module";
import { AppService } from "./app.service";
import { AppController } from "./app.controller";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot(
      "mongodb+srv://max200pl:29121994mO111@cluster0.bmnyz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
