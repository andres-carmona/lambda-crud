import { ClientService } from '../client.service';
import { Repository } from 'typeorm';
import { ClientEntity } from '../client.entity';
import { TestingModule, Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

const mock_db_client = {
  id: 1,
  name: 'Andres',
  last_name: 'Carmona',
  dob: '19/04/1991',
  username: 'acarmona',
  country: 'PE',
};

const mock_client_create = {
  name: 'Andres',
  lastname: 'Carmona',
  dateOfBirth: '19/04/1991',
  username: 'acarmona',
  country: 'PE',
};

const mock_client_update = {
  id: 1,
  name: 'Andres',
};

describe('ClientService', () => {
  let clientService: ClientService;
  let clientRepository: Repository<ClientEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClientService,
        {
          provide: getRepositoryToken(ClientEntity),
          useValue: {
            save: jest.fn().mockResolvedValue(mock_db_client),
            find: jest.fn().mockResolvedValue([mock_db_client]),
            delete: jest.fn().mockResolvedValue({ affected: 1 }),
          },
        },
      ],
    }).compile();

    clientService = module.get(ClientService);
    clientRepository = module.get(getRepositoryToken(ClientEntity));
  });

  it('Should be defined', () => {
    expect(clientService).toBeDefined();
  });

  it('should create a new client', () => {
    expect(clientService.create(mock_client_create)).resolves.toEqual(
      mock_db_client,
    );
  });

  it('should update an existing client', () => {
    expect(clientService.update(mock_client_update)).resolves.toEqual(
      mock_db_client,
    );
  });

  it('should query an array of clients', () => {
    expect(clientService.listAll()).resolves.toEqual([mock_db_client]);
  });

  it('should create a new client', () => {
    expect(clientService.delete(1)).resolves.toEqual({ affected: 1 });
  });
});
