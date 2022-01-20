import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { IdlesController } from './idle.controller';
import { IdleModel } from './idle.model';
import { IdleService } from './idle.service';

@Module({
  imports: [SequelizeModule.forFeature([IdleModel]), AuthModule],
  controllers: [IdlesController],
  providers: [IdleService],
})
export class IdleModule {}
