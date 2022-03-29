import { Injectable } from '@nestjs/common';
import { QuickSight } from 'aws-sdk';
import { InjectAwsService } from 'nest-aws-sdk';

@Injectable()
export class AppService {

  constructor(@InjectAwsService(QuickSight) private readonly quicksight: QuickSight) {}

  async getAuthenticatedUrl(token: string): Promise<string> {
    return this.quicksight.generateEmbedUrlForRegisteredUser({
      AwsAccountId: "235997980558",
      ExperienceConfiguration: {
        Dashboard: {
          InitialDashboardId: "d29bb582-7219-497b-ba18-ddefd316e94d"
        }
      },
      UserArn: "arn:aws:quicksight:us-east-1:235997980558:user/default/data-quicksight",
    }).promise().then(result => {
      return result.EmbedUrl;
    });    
  }
}
