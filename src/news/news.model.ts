import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Table, Model } from 'sequelize-typescript';

export interface NewsModelCreationAttrib {
  title: string;
  content: string;
}

@Table({ tableName: 'News' })
export class NewsModel extends Model<NewsModel, NewsModelCreationAttrib> {
  @ApiProperty({ example: '1', description: 'Уникальный индификатор' })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'text', description: 'Заголовок новости' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @ApiProperty({ example: 'text', description: 'Текст нвоости' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  content: string;
}
