import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateIdleDto {
  @IsString()
  @ApiProperty({ example: 'title', description: 'Заголовок стойла' })
  title: string;

  @IsString()
  @ApiProperty({ example: 'some text', description: 'Текст стойла' })
  content: string;
}
