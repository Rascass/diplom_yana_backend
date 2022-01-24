import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Table, Model } from 'sequelize-typescript';

export interface SellModelCreationAttrib {
  title: string;
  content: string;
  video: string
}

@Table({ tableName: 'Selles' })
export class SellModel extends Model<SellModel, SellModelCreationAttrib> {
  @ApiProperty({ example: '1', description: 'Уникальный индификатор' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'text', description: 'Заголовок объявления' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @ApiProperty({ example: 'text', description: 'Текст объявления' })
  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  content: string;

  @ApiProperty({ example: 'link', description: 'Ссылка на видео' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  video: string;

  @ApiProperty({ example: 'М|Ж', description: 'пол лошади' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  sex: string;

  @ApiProperty({ example: '1', description: 'Возраст лошади' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  age: number;

  @ApiProperty({ example: '1', description: 'Тип лошади' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  type: string;

  @ApiProperty({ example: '1', description: 'Цена лошади' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  price: string;
}
