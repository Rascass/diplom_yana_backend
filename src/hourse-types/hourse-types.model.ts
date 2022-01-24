import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Table, Model, HasMany } from 'sequelize-typescript';
import { HoursesModel } from 'src/hourses/hourses.model';

export interface HourseTypesModelCreationAttrib {
  name: string;
}

@Table({ tableName: 'HourseTypes' })
export class HourseTypesModel extends Model<
  HourseTypesModel,
  HourseTypesModelCreationAttrib
> {
  @ApiProperty({ example: '1', description: 'Уникальный индификатор' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'name', description: 'Имя специализации' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  name: string;

  @HasMany(() => HoursesModel)
  hourses: HoursesModel[];
}
