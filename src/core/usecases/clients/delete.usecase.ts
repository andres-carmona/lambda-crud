import { Injectable } from "@nestjs/common";
import { ClientService } from "src/domain/Client/client.service";
import { IUsecaseBase } from "src/infrastructure/interfaces/IUsecaseBase.interface";

@Injectable()
export class DeleteUsecase implements IUsecaseBase<number, Promise<boolean>> {
  constructor(
    private clientService: ClientService
  ) { }

  execute(dto: number): Promise<boolean> {
    return this.clientService.delete(dto).then(result => {
      return result.affected > 0;
    });
  }
}