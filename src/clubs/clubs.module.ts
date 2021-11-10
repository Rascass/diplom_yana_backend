import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ClubsController } from './clubs.controller';
import { ClubsModel } from './clubs.model';
import { ClubsService } from './clubs.service';

@Module({
  imports: [SequelizeModule.forFeature([ClubsModel])],
  controllers: [ClubsController],
  providers: [ClubsService],
})
export class ClubsModule {}
