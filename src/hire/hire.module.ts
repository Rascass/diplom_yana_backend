import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { HireController } from './hire.controller';
import { HireModel } from './hire.model';
import { HireService } from './hire.service';

@Module({
  imports: [SequelizeModule.forFeature([HireModel]), AuthModule],
  controllers: [HireController],
  providers: [HireService],
})
export class HireModule {}
