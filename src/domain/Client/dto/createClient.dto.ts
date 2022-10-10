import { IsString, IsDate, Length } from 'class-validator';

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
