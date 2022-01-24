import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { HourseTypesController } from './hourse-types.controller';
import { HourseTypesModel } from './hourse-types.model';
import { HourseTypesService } from './hourse-types.service';

@Module({
  imports: [SequelizeModule.forFeature([HourseTypesModel]), AuthModule],
  controllers: [HourseTypesController],
  providers: [HourseTypesService],
})
export class HourseTypesModule {}
