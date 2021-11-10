import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, HasOne, Model, Table } from 'sequelize-typescript';
import { UsersModel } from 'src/auth/users.model';
import { ClubsModel } from 'src/clubs/clubs.model';
import { HoursesOwnersModel } from 'src/hourses-owners/hourses-owners.model';
import { RidersModel } from 'src/riders/riders.model';

@Table({ tableName: 'Persons' })
export class PersonsModel extends Model {
  @ApiProperty({ example: '1', description: 'Уникальный индификатор' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'f_name', description: 'Имя' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  f_name: string;

  @ApiProperty({ example: 's_name', description: 'Фамилия' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  s_name: string;

  @ApiProperty({ example: 'l_name', description: 'Отчество' })
  @Column({
    type: DataType.STRING,
  })
  l_name: string;

  @ApiProperty({ example: 'yy/MM/dd', description: 'День рождения' })
  @Column({
    type: DataType.DATEONLY,
    allowNull: false,
  })
  birthday: Date;

  @HasOne(() => HoursesOwnersModel)
  own_hourse: HoursesOwnersModel;

  @HasOne(() => UsersModel)
  users: UsersModel;

  @HasOne(() => RidersModel)
  rider: RidersModel;

  @HasOne(() => ClubsModel)
  club: ClubsModel;
}
