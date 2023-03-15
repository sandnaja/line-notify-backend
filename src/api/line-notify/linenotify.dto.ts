import { IsString } from 'class-validator';
export class LineNotifyDto {

  @IsString()
  public companyname: string;

  @IsString()
  public soid: string;
  
  @IsString()
  public url: string;
}