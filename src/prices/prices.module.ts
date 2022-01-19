import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { PriceController } from './prices.controller';
import { PricesModel } from './prices.model';
import { PriceService } from './prices.service';

@Module({
  imports: [SequelizeModule.forFeature([PricesModel]), AuthModule],
  controllers: [PriceController],
  providers: [PriceService],
})
export class PriceModule {}
