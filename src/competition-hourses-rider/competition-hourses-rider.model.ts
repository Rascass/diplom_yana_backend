import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  Table,
  Model,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { CompetitionsModel } from 'src/competitions/competitions.model';
import { HoursesModel } from 'src/hourses/hourses.model';
import { RidersModel } from 'src/riders/riders.model';

export interface CompetitionHoursesRiderModelCreationAttrib {
  hourse_id: number;
  rider_id: number;
  compition_id: number;
}

@Table({ tableName: 'HoursCompetitionHoursesRider' })
export class CompetitionHoursesRiderModel extends Model<
  CompetitionHoursesRiderModel,
  CompetitionHoursesRiderModelCreationAttrib
> {
  @ApiProperty({ example: '1', description: 'Уникальный индификатор' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: '1', description: 'Id лошади' })
  @ForeignKey(() => HoursesModel)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  hourse_id: number;

  @ApiProperty({ example: '1', description: 'Id наездника' })
  @ForeignKey(() => RidersModel)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  rider_id: number;

  @ApiProperty({ example: '1', description: 'Id соревнования' })
  @ForeignKey(() => CompetitionsModel)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  compition_id: number;

  @BelongsTo(() => HoursesModel)
  hourse: HoursesModel;

  @BelongsTo(() => RidersModel)
  rider: RidersModel;

  @BelongsTo(() => CompetitionsModel)
  compitions: CompetitionsModel;
}
