import { Injectable } from "@nestjs/common";
import { ClientService } from "src/domain/Client/client.service";
import { UpdateClientDTO } from "src/domain/Client/dto/updateClient.dto";
import { IClient } from "src/domain/Client/IClient.interface";
import { IUsecaseBase } from "src/infrastructure/interfaces/IUsecaseBase.interface";

@Injectable()
export class UpdateUsecase implements IUsecaseBase<UpdateClientDTO, Promise<IClient>> {
  constructor(
    private clientService: ClientService
  ) { }

  execute(dto: UpdateClientDTO): Promise<IClient> {
    return this.clientService.update(dto);
  }
}