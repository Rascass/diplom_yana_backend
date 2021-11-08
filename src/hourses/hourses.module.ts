import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { HoursesController } from './hourses.controller';
import { HoursesModel } from './hourses.model';
import { HoursesService } from './hourses.service';

@Module({
  imports: [SequelizeModule.forFeature([HoursesModel])],
  controllers: [HoursesController],
  providers: [HoursesService],
})
export class HoursesModule {}
