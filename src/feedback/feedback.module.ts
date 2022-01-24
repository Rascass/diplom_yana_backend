import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { FeedbackController } from './feedback.controller';
import { FeedbackModel } from './feedback.model';
import { FeedbackService } from './feedback.service';

@Module({
  imports: [SequelizeModule.forFeature([FeedbackModel]), AuthModule],
  controllers: [FeedbackController],
  providers: [FeedbackService],
})
export class FeedbackModule {}
