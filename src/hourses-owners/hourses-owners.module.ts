import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { HoursesOwnersController } from './hourses-owners.controller';
import { HoursesOwnersModel } from './hourses-owners.model';
import { HoursesOwnersService } from './hourses-owners.service';

@Module({
  imports: [SequelizeModule.forFeature([HoursesOwnersModel])],
  controllers: [HoursesOwnersController],
  providers: [HoursesOwnersService],
})
export class HoursesOwnersModule {}
