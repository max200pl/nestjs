import { UpdateProductDto } from "./update-productDto";
import { Product, ProductDocument } from "./../schemas/product.schema";
import { CreateProductDto } from "./create-product.dto";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
@Injectable()
export class ProductsService {
  constructor(
    //inject Schema заносим в переменную => productModel; указываем тип => Model<ProductDocument>
    @InjectModel(Product.name) private productModel: Model<ProductDocument>
  ) {}

  async getAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async getById(id: string): Promise<Product> {
    return this.productModel.findById(id);
  }

  create(productDto: CreateProductDto): Promise<Product> {
    const newProduct = new this.productModel(productDto);
    return newProduct.save();
  }

  async remove(id: string): Promise<Product> {
    return this.productModel.findByIdAndRemove(id);
  }

  async update(id: string, productDto: UpdateProductDto): Promise<Product> {
    return this.productModel.findByIdAndUpdate(id, productDto, { new: true });
  }
}
