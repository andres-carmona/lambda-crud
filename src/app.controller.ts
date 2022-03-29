import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ResponseDTO } from './dto/response.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/get-url')
  async retrieveUrl(): Promise<ResponseDTO> {
    const url = await this.appService.getAuthenticatedUrl('');

    return new ResponseDTO(url);
  }
}
