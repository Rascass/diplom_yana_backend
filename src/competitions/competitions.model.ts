import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Table, Model, HasOne } from 'sequelize-typescript';
import { CompetitionHoursesRiderModel } from 'src/competition-hourses-rider/competition-hourses-rider.model';

export interface CompetitionsModelCreationAttrib {
  startdate: Date;
  end_date: Date;
  prize_info: string;
  name: string;
  description: string;
}

@Table({ tableName: 'Competitions' })
export class CompetitionsModel extends Model<
  CompetitionsModel,
  CompetitionsModelCreationAttrib
> {
  @ApiProperty({ example: '1', description: 'Уникальный индификатор' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: '1995-12-17T03:24:00',
    description: 'Дата и время начала соревнования',
  })
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  startdate: Date;

  @ApiProperty({
    example: 'yy/MM/dd',
    description: 'Дата окончания соревнования',
  })
  @Column({
    type: DataType.DATEONLY,
    allowNull: false,
  })
  end_date: Date;

  @ApiProperty({ example: '1000 $', description: 'Призовые' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  prize_info: string;

  @ApiProperty({ example: 'name', description: 'Название соревнований' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({ example: 'some text', description: 'Описание соревнований' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @HasOne(() => CompetitionHoursesRiderModel)
  competition_hourses_rider: CompetitionHoursesRiderModel;
}
