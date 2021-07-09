import { ProductsService } from "./dto/products.service";
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

@Controller("products") // наш URL loc-host:3000/products
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {} // inject service контроллер

  @Get()
  @Redirect("https://goole.com", 301)
  getAll() {
    return this.productsService.getAll(); //делегирование событий для service
  }

  @Get(":id")
  getOne(
    @Param("id") id: string // какое свойство нужно получить "id" потом получить свойство  id // params передаем свойство в метод через декоратор и присваиваем имя -> params
  ): string {
    return this.productsService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createProductDto: CreateProductDto): string {
    return (
      this.productsService.create(createProductDto),
      `Title: ${createProductDto.title} Price: ${createProductDto.price}`
    );
  }

  @Delete(":id")
  remove(@Param(":id") id: string) {
    return "Remove" + id;
  }

  @Put(":id")
  update(@Body() updateProductDto: UpdateProductDto, @Param(":id") id: string) {
    return "Update " + id;
  }
}
