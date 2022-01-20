import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Table, Model } from 'sequelize-typescript';

export interface OrderModelCreationAttrib {
  full_name: string;
  number: string;
  link: string;
  feedback: boolean;
}

@Table({ tableName: 'Orders' })
export class OrderModel extends Model<OrderModel, OrderModelCreationAttrib> {
  @ApiProperty({ example: '1', description: 'Уникальный индификатор' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'Иван Иванович Иванов',
    description: 'ФИО заказчика',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  full_name: string;

  @ApiProperty({ example: '+375 11 111 11 11', description: 'Номер телефона' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  number: string;

  @ApiProperty({
    example: 'http://localhost:5000/api/hires/1',
    description: 'Ссылка на страницу',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  link: string;

  @ApiProperty({ example: 'true', description: 'Был ли проезведен звонок' })
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  feedback: boolean;
}
