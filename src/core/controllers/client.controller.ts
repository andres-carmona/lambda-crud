import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { CreateClientDTO } from 'src/domain/Client/dto/createClient.dto';
import { UpdateClientDTO } from 'src/domain/Client/dto/updateClient.dto';
import { IClient } from 'src/domain/Client/IClient.interface';
import { ResponseBodyDTO } from 'src/infrastructure/http/dto/responseBody.dto';
import { CreateUsecase } from '../usecases/clients/create.usecase';
import { DeleteUsecase } from '../usecases/clients/delete.usecase';
import { GetUsecase } from '../usecases/clients/get.usecase';
import { UpdateUsecase } from '../usecases/clients/update.usecase';

@Controller('clients')
export class ClientController {
  constructor(
    private createUsecase: CreateUsecase,
    private updateUsecase: UpdateUsecase,
    private deleteUsecase: DeleteUsecase,
    private getUsecase: GetUsecase,
  ) {}

  @Get()
  async listAll(): Promise<ResponseBodyDTO<IClient[]>> {
    const result = await this.getUsecase.execute(null);

    return {
      code: '',
      message: 'OK',
      data: result,
    };
  }

  @Post()
  async create(
    @Body() dto: CreateClientDTO,
  ): Promise<ResponseBodyDTO<IClient>> {
    const result = await this.createUsecase.execute(dto);

    return {
      code: '',
      message: 'OK',
      data: result,
    };
  }

  @Put()
  async update(
    @Body() dto: UpdateClientDTO,
  ): Promise<ResponseBodyDTO<IClient>> {
    const result = await this.updateUsecase.execute(dto);

    return {
      code: '',
      message: 'OK',
      data: result,
    };
  }

  @Delete(':id')
  async delete(
    @Param({
      transform(value, metadata) {
        return Number(value.id);
      },
    })
    id: number,
  ): Promise<ResponseBodyDTO<{ deleted: boolean }>> {
    const result = await this.deleteUsecase.execute(id);

    return {
      code: '',
      message: 'OK',
      data: { deleted: result },
    };
  }
}
