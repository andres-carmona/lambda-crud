import { Injectable } from "@nestjs/common";
import { ClientService } from "src/domain/Client/client.service";
import { CreateClientDTO } from "src/domain/Client/dto/createClient.dto";
import { IClient } from "src/domain/Client/IClient.dto";
import { IUsecaseBase } from "src/infrastructure/interfaces/IUsecaseBase.interface";

@Injectable()
export class CreateUsecase implements IUsecaseBase<CreateClientDTO, Promise<IClient>> {
  constructor(
    private clientService: ClientService
  ) { }

  execute(dto: CreateClientDTO): Promise<IClient> {
    return this.clientService.create(dto);
  }
}