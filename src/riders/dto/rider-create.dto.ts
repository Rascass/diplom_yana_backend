import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateRidersDto {
  @ApiProperty({ example: '1', description: 'id персоны' })
  @IsNumber()
  person_id: number;

  @IsNumber()
  @ApiProperty({ example: '1', description: 'id титула' })
  title_id: number;
}
