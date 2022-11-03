import { Module } from '@nestjs/common';
import { CoursersController } from './coursers.controller';
import { CoursersService } from './coursers.service';

@Module({
  controllers: [CoursersController],
  providers: [CoursersService],
})
export class CoursersModule {}
