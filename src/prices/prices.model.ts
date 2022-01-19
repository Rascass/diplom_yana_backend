import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Table, Model } from 'sequelize-typescript';

export interface PricesModelCreationAttrib {
  content: string;
}

@Table({ tableName: 'Prices' })
export class PricesModel extends Model<PricesModel, PricesModelCreationAttrib> {
  @ApiProperty({ example: '1', description: 'Уникальный индификатор' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'text', description: 'Текст прайс-листа' })
  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  content: string;
}
