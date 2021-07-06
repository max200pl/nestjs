import { Header, HttpStatus, Req, Res } from '@nestjs/common';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Redirect,
} from '@nestjs/common';
import { CreateProductDto } from './dto/cteate-product.dto';
import { updateProductDto } from './dto/update-product.dto';
import { Response, Request } from 'express';
import { ProductsService } from './dto/products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  /*   @Get()
  //@Redirect('https://goole.com', 301)
  getAll(@Req() req: Request, @Res() res: Response): string {
    res.status(201).end('Poke');
    return 'getAll';
  } 
*/

  @Get()
  getAll() {
    return this.productsService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.productsService.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cashe-Control', 'none')
  create(@Body() createProductDto: CreateProductDto): string {
    return this.productsService.create(createProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return 'Remove' + id;
  }

  @Put(':id')
  update(@Body() updateProductDto: updateProductDto, @Param('id') id: string) {
    return 'Update' + id;
  }
}
