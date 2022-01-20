import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateSellDto {
  @IsString()
  @ApiProperty({ example: 'title', description: 'Заголовок объявления' })
  title: string;

  @IsString()
  @ApiProperty({ example: 'some text', description: 'Текст объявления' })
  content: string;
}
