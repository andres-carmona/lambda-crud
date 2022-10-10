import { Module } from '@nestjs/common';
import { ClientModule } from './Client/client.module';

const entityModules = [ClientModule];

@Module({
  imports: [...entityModules],
  exports: [...entityModules]
})
export class DomainModule {}
