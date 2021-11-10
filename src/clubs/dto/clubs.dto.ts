import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class ClubsDto {
  @IsString()
  @ApiProperty({ example: 'name', description: 'Имя клуба' })
  name: string;

  @IsNumber()
  @ApiProperty({ example: '1', description: 'Id владельца' })
  head_id: number;
}
