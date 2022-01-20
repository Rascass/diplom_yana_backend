import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Table, Model } from 'sequelize-typescript';

export interface SellModelCreationAttrib {
  title: string;
  content: string;
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
}
