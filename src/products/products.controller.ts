import { ProductsService } from "./products.service";
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Redirect,
} from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-productDto";
import { Product } from "./schemas/product.schema";

@Controller("products") // наш URL loc-host:3000/products
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {} // inject service контроллер

  @Get()
  getAll(): Promise<Product[]> {
    return this.productsService.getAll(); //делегирование событий для service
  }

  @Get(":id")
  getOne(
    @Param("id") id: string // какое свойство нужно получить "id" потом получить свойство  id // params передаем свойство в метод через декоратор и присваиваем имя -> params
  ): Promise<Product> {
    return this.productsService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productsService.create(createProductDto);
  }

  @Delete(":id")
  remove(@Param(":id") id: string): Promise<Product> {
    return this.productsService.remove(id);
  }

  @Put(":id")
  update(
    @Body() updateProductDto: UpdateProductDto,
    @Param(":id") id: string
  ): Promise<Product> {
    return this.productsService.update(id, updateProductDto);
  }
}
