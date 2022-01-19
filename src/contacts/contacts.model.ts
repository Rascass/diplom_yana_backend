import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Table, Model } from 'sequelize-typescript';

export interface ContactsModelCreationAttrib {
  content: string;
}

@Table({ tableName: 'Contacts' })
export class ContactsModel extends Model<
  ContactsModel,
  ContactsModelCreationAttrib
> {
  @ApiProperty({ example: '1', description: 'Уникальный индификатор' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'text', description: 'Текст контактов' })
  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  content: string;
}
