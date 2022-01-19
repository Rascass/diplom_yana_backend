import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Table, Model } from 'sequelize-typescript';

export interface HireModelCreationAttrib {
  title: string;
  content: string;
}

@Table({ tableName: 'Hires' })
export class HireModel extends Model<HireModel, HireModelCreationAttrib> {
  @ApiProperty({ example: '1', description: 'Уникальный индификатор' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'text', description: 'Заголовок проката' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @ApiProperty({ example: 'text', description: 'Текст проката' })
  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  content: string;
}
