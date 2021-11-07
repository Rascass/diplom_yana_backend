import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  Table,
  Model,
  HasMany,
  ForeignKey,
} from 'sequelize-typescript';
import { UsersModel } from 'src/auth/users.model';

export interface RolesModelCreationAttrib {
  role_name: string;
}

@Table({ tableName: 'Roles' })
export class RolesModel extends Model<RolesModel, RolesModelCreationAttrib> {
  @ApiProperty({ example: '1', description: 'Уникальный индификатор' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'role_name', description: 'Имя роли' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  role_name: string;

  @HasMany(() => UsersModel)
  users: UsersModel[];
}
