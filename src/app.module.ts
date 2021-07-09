import { AppService } from "./app.service";
import { AppController } from "./app.controller";
import { Module } from "@nestjs/common";
import { ProductsController } from "./products/products.controller";
import { ProductsService } from "./products/dto/products.service";

@Module({
  imports: [],
  controllers: [AppController, ProductsController],
  providers: [AppService, ProductsService],
})
export class AppModule {}
