import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { NewsController } from './news.controller';
import { NewsModel } from './news.model';
import { NewsService } from './news.service';

@Module({
  imports: [SequelizeModule.forFeature([NewsModel]), AuthModule],
  controllers: [NewsController],
  providers: [NewsService],
})
export class NewsModule {}
