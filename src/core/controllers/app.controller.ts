import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  async retrieveUrl(): Promise<string> {
    return "Hello from my endpoint.";
  }
}
