import { Product, ProductsSchema } from "./schemas/product.schema";
import { MongooseModule } from "@nestjs/mongoose";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";
import { Module } from "@nestjs/common";

@Module({
  providers: [ProductsService],
  controllers: [ProductsController],
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductsSchema }]),
  ],
})
export class ProductsModule {}
