import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { NewsController } from './news.controller';
import { NewsModel } from './news.model';
import { NewsService } from './news.service';

@Module({
  providers: [NewsService],
  imports: [SequelizeModule.forFeature([NewsModel])],
  controllers: [NewsController],
})
export class NewsModule {}
