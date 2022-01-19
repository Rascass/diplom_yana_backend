import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { HoursesController } from './hourses.controller';
import { HoursesModel } from './hourses.model';
import { HoursesService } from './hourses.service';

@Module({
  imports: [SequelizeModule.forFeature([HoursesModel]), AuthModule],
  controllers: [HoursesController],
  providers: [HoursesService],
})
export class HoursesModule {}
