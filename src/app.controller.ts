import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller() //Декоратор
export class AppController {
  constructor(private readonly appService: AppService) {} // исп dependency injection для исп. AppService

  @Get()
  getHello(): string {
    return "hello very fine ";
  }
}
