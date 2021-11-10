import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  Table,
  Model,
  BelongsTo,
  ForeignKey,
  HasMany,
} from 'sequelize-typescript';
import { HoursesModel } from 'src/hourses/hourses.model';
import { PersonsModel } from 'src/persons/persons.model';

export interface ClubsModelCreationAttrib {
  head_id: number;
  name: string;
}

@Table({ tableName: 'Clubs' })
export class ClubsModel extends Model<ClubsModel, ClubsModelCreationAttrib> {
  @ApiProperty({ example: '1', description: 'Уникальный индификатор' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: '1', description: 'id главы' })
  @ForeignKey(() => PersonsModel)
  @Column({
    type: DataType.INTEGER,
    unique: true,
    allowNull: false,
  })
  head_id: number;

  @ApiProperty({ example: 'name', description: 'Имя клуба' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  name: string;

  @BelongsTo(() => PersonsModel)
  person: PersonsModel;

  @HasMany(() => HoursesModel)
  hourses: HoursesModel[];
}
