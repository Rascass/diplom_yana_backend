import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { OrdersController } from './orders.controller';
import { OrderModel } from './orders.model';
import { OrderService } from './orders.service';

@Module({
  imports: [SequelizeModule.forFeature([OrderModel]), AuthModule],
  controllers: [OrdersController],
  providers: [OrderService],
})
export class OrderModule {}
