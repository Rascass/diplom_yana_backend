import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  Table,
  Model,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { PersonsModel } from 'src/persons/persons.model';
import { TitlesModel } from 'src/titles/titles.model';

export interface RidersModelCreationAttrib {
  person_id: number;
  title_id: number;
}

@Table({ tableName: 'Riders' })
export class RidersModel extends Model<RidersModel, RidersModelCreationAttrib> {
  @ApiProperty({ example: '1', description: 'Уникальный индификатор' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'text', description: 'Заголовок новости' })
  @ForeignKey(() => PersonsModel)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    unique: true,
  })
  person_id: number;

  @ApiProperty({ example: 'text', description: 'Текст нвоости' })
  @ForeignKey(() => TitlesModel)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    unique: true,
  })
  title_id: number;

  @BelongsTo(() => TitlesModel)
  title: TitlesModel;

  @BelongsTo(() => PersonsModel)
  person: PersonsModel;
}
