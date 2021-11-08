import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Table, Model, HasMany } from 'sequelize-typescript';
import { RidersModel } from 'src/riders/riders.model';

export interface TitlesModelCreationAttrib {
  name: string;
}

@Table({ tableName: 'Titles' })
export class TitlesModel extends Model<TitlesModel, TitlesModelCreationAttrib> {
  @ApiProperty({ example: '1', description: 'Уникальный индификатор' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'name', description: 'Имя титула' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  name: string;

  @HasMany(() => RidersModel)
  riders: RidersModel[];
}
