import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { SellesController } from './selles.controller';
import { SellModel } from './selles.model';
import { SellService } from './selles.service';

@Module({
  imports: [SequelizeModule.forFeature([SellModel]), AuthModule],
  controllers: [SellesController],
  providers: [SellService],
})
export class SellModule {}
