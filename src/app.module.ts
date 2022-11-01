import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursersModule } from './coursers/coursers.module';

@Module({
  imports: [CoursersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
