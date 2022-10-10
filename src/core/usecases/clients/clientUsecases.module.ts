import { Module } from '@nestjs/common';
import { DomainModule } from 'src/domain/domain.module';
import { CreateUsecase } from './create.usecase';
import { DeleteUsecase } from './delete.usecase';
import { GetUsecase } from './get.usecase';
import { UpdateUsecase } from './update.usecase';

const usecases = [CreateUsecase, UpdateUsecase, DeleteUsecase, GetUsecase];

@Module({
  imports: [DomainModule],
  exports: [...usecases],
  providers: [...usecases, DomainModule],
})
export class ClientUsecasesModule {}
