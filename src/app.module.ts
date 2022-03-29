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
        region: 'us-east-1',
        credentials: {
          accessKeyId: 'AKIATN4UTM6HOHAHUXWL',
          secretAccessKey: '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',
        },
      },
      services: [QuickSight],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
