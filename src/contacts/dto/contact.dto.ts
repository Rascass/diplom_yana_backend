import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateContactsDto {
  @IsString()
  @ApiProperty({ example: 'some text', description: 'Текст контактов' })
  content: string;
}
