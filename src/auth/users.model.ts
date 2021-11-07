import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  Table,
  Model,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { RolesModel } from 'src/roles/roles.model';

@Table({ tableName: 'Users' })
export class UsersModel extends Model {
  @ApiProperty({ example: '1', description: 'Уникальный индификатор' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'asfaf', description: 'логин' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  login: string;

  @ApiProperty({ example: '123a1sfa456', description: 'пароль' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  pass: string;

  @ApiProperty({ example: '1', description: 'id роли' })
  @ForeignKey(() => RolesModel)
  @Column({
    type: DataType.INTEGER,
  })
  role_id: number;

  @ApiProperty({ example: '1', description: 'id персоны' })
  @Column({
    type: DataType.INTEGER,
  })
  person_id: number;

  @BelongsTo(() => RolesModel)
  role: RolesModel;
}
