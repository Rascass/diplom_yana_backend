import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateSellDto {
  @IsString()
  @ApiProperty({ example: 'title', description: 'Заголовок объявления' })
  title: string;

  @IsString()
  @ApiProperty({ example: 'some text', description: 'Текст объявления' })
  content: string;

  @IsString()
  @ApiProperty({ example: 'link', description: 'Ссылка на видео' })
  video: string;

  @IsString()
  @ApiProperty({ example: 'М|Ж', description: 'Пол лошади' })
  sex: string;

  @IsString()
  @ApiProperty({ example: '1', description: 'Возраст лошади' })
  age: number;

  @IsString()
  @ApiProperty({ example: '1', description: 'Тип лошади' })
  type: string;

  @IsString()
  @ApiProperty({ example: '1', description: 'Цена лошади' })
  price: string;
}
