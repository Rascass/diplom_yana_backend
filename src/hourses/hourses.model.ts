import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  Table,
  Model,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { HourseTypesModel } from 'src/hourse-types/hourse-types.model';

export interface HoursesModelCreationAttrib {
  nickname: string;
  club_id: number;
  hourse_type_id: number;
  birthday: Date;
  sex: string;
}

@Table({ tableName: 'Hourses' })
export class HoursesModel extends Model<
  HoursesModel,
  HoursesModelCreationAttrib
> {
  @ApiProperty({ example: '1', description: 'Уникальный индификатор' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'name', description: 'Кличка лошади' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nickname: string;

  @ApiProperty({ example: 'male', description: 'Пол лошади' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  sex: string;

  @ApiProperty({ example: '1', description: 'Id клуба' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  club_id: number;

  @ApiProperty({ example: '1', description: 'Id породы' })
  @ForeignKey(() => HourseTypesModel)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  hourse_type_id: number;

  @ApiProperty({ example: 'yy/MM/dd', description: 'День рождения' })
  @Column({
    type: DataType.DATEONLY,
    allowNull: false,
  })
  birthday: Date;

  @BelongsTo(() => HourseTypesModel)
  hourse_type: HourseTypesModel;
}