import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PersonsController } from './persons.controller';
import { PersonsModel } from './persons.model';
import { PersonsService } from './persons.service';

@Module({
  imports: [SequelizeModule.forFeature([PersonsModel])],
  controllers: [PersonsController],
  providers: [PersonsService],
})
export class PersonsModule {}
