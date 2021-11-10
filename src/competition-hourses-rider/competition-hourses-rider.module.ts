import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CompetitionHoursesRiderController } from './competition-hourses-rider.controller';
import { CompetitionHoursesRiderModel } from './competition-hourses-rider.model';
import { CompetitionHoursesRiderService } from './competition-hourses-rider.service';

@Module({
  imports: [SequelizeModule.forFeature([CompetitionHoursesRiderModel])],
  controllers: [CompetitionHoursesRiderController],
  providers: [CompetitionHoursesRiderService],
})
export class CompetitionHoursesRiderModule {}
