import { IsString, IsDate, Length, IsNumber } from 'class-validator';

export class UpdateClientDTO {
  
  @IsNumber({ allowNaN: false })
  id: number;

  @IsString()
  name?: string;

  @IsString()
  lastname?: string;

  @IsDate()
  dateOfBirth?: string;

  @IsString()
  @Length(2, 2)
  country?: string;
}
