import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './database/PostgreSQL.config';

@Module({
  imports: [TypeOrmModule.forRoot(config)],
})
export class InfrastructureModule {}
