import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class productDto {
  @IsString()
  @ApiProperty({ example: '1200 р', description: 'Цена товара' })
  price: string;

  @IsString()
  @ApiProperty({ example: 'some text', description: 'Описание товара' })
  description: string;

  @IsNumber()
  @ApiProperty({ example: '1', description: 'Id товара' })
  sellable_id: number;

  @IsNumber()
  @ApiProperty({ example: '1', description: 'Id продавца' })
  seller_id: number;

  @IsString()
  @ApiProperty({ example: '1', description: 'Имя твоара/заголовок объявления' })
  name: string;
}
