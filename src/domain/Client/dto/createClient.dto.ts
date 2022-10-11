import { IsString, Length } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class CreateClientDTO {

  @IsString()
  name: string;

  @IsString()
  lastname: string;

  @IsString()
  dateOfBirth: string;

  @IsString()
  username: string;

  @IsString()
  @Length(2, 2)
  country: string;
}
