import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { ClientEntity } from './client.entity';
import { CreateClientDTO } from './dto/createClient.dto';
import { UpdateClientDTO } from './dto/updateClient.dto';
import { IClient } from './IClient.interface';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(ClientEntity)
    private clientRepository: Repository<ClientEntity>,
  ) {}

  create(client: CreateClientDTO): Promise<IClient> {
    return this.clientRepository.save(client);
  }

  update(client: UpdateClientDTO): Promise<IClient> {
    return this.clientRepository.save(client);
  }

  listAll(): Promise<IClient[]> {
    return this.clientRepository.find();
  }

  delete(id: number): Promise<DeleteResult> {
    return this.clientRepository.delete({id});
  }
}
