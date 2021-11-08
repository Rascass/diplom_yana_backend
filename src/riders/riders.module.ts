import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { RidersController } from './riders.controller';
import { RidersModel } from './riders.model';
import { RidersService } from './riders.service';

@Module({
  imports: [SequelizeModule.forFeature([RidersModel])],
  controllers: [RidersController],
  providers: [RidersService],
})
export class RidersModule {}
