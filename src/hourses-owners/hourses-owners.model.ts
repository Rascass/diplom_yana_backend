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

export interface HoursesOwnersModelCreationAttrib {
  hourse_id: number;
  person_id: number;
  startdate: Date;
}

@Table({ tableName: 'HoursesOwners' })
export class HoursesOwnersModel extends Model<
  HoursesOwnersModel,
  HoursesOwnersModelCreationAttrib
> {
  @ApiProperty({ example: '1', description: 'Уникальный индификатор' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: '1', description: 'id Лошади' })
  @ForeignKey(() => HoursesModel)
  @Column({
    type: DataType.INTEGER,
    unique: true,
    allowNull: false,
  })
  hourse_id: number;

  @ApiProperty({ example: '1', description: 'id Персоны' })
  @ForeignKey(() => PersonsModel)
  @Column({
    type: DataType.INTEGER,
    unique: true,
    allowNull: false,
  })
  person_id: number;

  @ApiProperty({ example: 'yy/MM/dd', description: 'День начала владения' })
  @Column({
    type: DataType.DATEONLY,
    allowNull: false,
  })
  startdate: Date;

  @BelongsTo(() => PersonsModel)
  person: PersonsModel;

  @BelongsTo(() => HoursesModel)
  hourse: HoursesModel;
}
