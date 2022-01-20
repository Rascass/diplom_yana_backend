import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Table, Model } from 'sequelize-typescript';

export interface IdleModelCreationAttrib {
  title: string;
  content: string;
}

@Table({ tableName: 'Idles' })
export class IdleModel extends Model<IdleModel, IdleModelCreationAttrib> {
  @ApiProperty({ example: '1', description: 'Уникальный индификатор' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'text', description: 'Заголовок стойла' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @ApiProperty({ example: 'text', description: 'Текст стойла' })
  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  content: string;
}
