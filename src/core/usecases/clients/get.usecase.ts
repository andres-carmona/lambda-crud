import { Injectable } from "@nestjs/common";
import { ClientService } from "src/domain/Client/client.service";
import { IClient } from "src/domain/Client/IClient.dto";
import { IUsecaseBase } from "src/infrastructure/interfaces/IUsecaseBase.interface";

@Injectable()
export class GetUsecase implements IUsecaseBase<any, Promise<IClient[]>> {
  constructor(
    private clientService: ClientService
  ) { }

  execute(dto: any): Promise<IClient[]> {
    return this.clientService.listAll();
  }
}