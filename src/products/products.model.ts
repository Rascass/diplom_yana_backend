import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  Table,
  Model,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { HoursesModel } from 'src/hourses/hourses.model';
import { PersonsModel } from 'src/persons/persons.model';

export interface ProductsModelCreationAttrib {
  price: string;
  description: string;
  sellable_id: number;
  seller_id: number;
  name: string;
}

@Table({ tableName: 'Products' })
export class ProductsModel extends Model<
  ProductsModel,
  ProductsModelCreationAttrib
> {
  @ApiProperty({ example: '1', description: 'Уникальный индификатор' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: '1200 р', description: 'Цена на товар' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  price: string;

  @ApiProperty({ example: 'some text', description: 'Описание товара' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @ApiProperty({ example: '1', description: 'Id товара' })
  @ForeignKey(() => HoursesModel)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  sellable_id: number;

  @ApiProperty({ example: '1', description: 'Id продавца' })
  @ForeignKey(() => PersonsModel)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  seller_id: number;

  @ApiProperty({
    example: 'text',
    description: 'Имя товара/заголовок объявления',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @BelongsTo(() => HoursesModel)
  product: HoursesModel;

  @BelongsTo(() => PersonsModel)
  person: PersonsModel;
}
