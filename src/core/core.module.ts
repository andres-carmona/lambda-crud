import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { ClientController } from './controllers/client.controller';
import { UsecasesModule } from './usecases/usecases.module';

const controllers = [AppController, ClientController];

@Module({
  imports: [UsecasesModule],
  providers: [UsecasesModule],
  controllers,
})
export class CoreModule {}
