import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePricesDto {
  @IsString()
  @ApiProperty({ example: 'some text', description: 'Текст прайс-листа' })
  content: string;
}
