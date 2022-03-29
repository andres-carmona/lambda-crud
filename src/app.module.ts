import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { QuickSight } from 'aws-sdk';
import { AwsSdkModule } from 'nest-aws-sdk';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AwsSdkModule.forRoot({
      defaultServiceOptions: {
        region: process.env.region,
        credentials: {
          accessKeyId: process.env.accessKeyId,
          secretAccessKey: process.env.secretAccessKey,
        }
      },
      services: [QuickSight]
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
