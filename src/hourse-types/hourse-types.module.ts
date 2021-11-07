import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { HourseTypesController } from './hourse-types.controller';
import { HourseTypesModel } from './hourse-types.model';
import { HourseTypesService } from './hourse-types.service';

@Module({
  imports: [SequelizeModule.forFeature([HourseTypesModel])],
  controllers: [HourseTypesController],
  providers: [HourseTypesService],
})
export class HourseTypesModule {}
