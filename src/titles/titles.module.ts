import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TitlesController } from './titles.controller';
import { TitlesModel } from './titles.model';
import { TitlesService } from './titles.service';

@Module({
  imports: [SequelizeModule.forFeature([TitlesModel])],
  controllers: [TitlesController],
  providers: [TitlesService],
})
export class TitlesModule {}
