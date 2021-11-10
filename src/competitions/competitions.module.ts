import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CompetitionsController } from './competitions.controller';
import { CompetitionsModel } from './competitions.model';
import { CompetitionsService } from './competitions.service';

@Module({
  imports: [SequelizeModule.forFeature([CompetitionsModel])],
  controllers: [CompetitionsController],
  providers: [CompetitionsService],
})
export class CompetitionsModule {}
