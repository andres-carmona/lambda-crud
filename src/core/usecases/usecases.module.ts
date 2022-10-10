import { Module } from '@nestjs/common';
import { ClientUsecasesModule } from './clients/clientUsecases.module';

@Module({
  imports: [ClientUsecasesModule],
  exports: [ClientUsecasesModule]
})
export class UsecasesModule {}
