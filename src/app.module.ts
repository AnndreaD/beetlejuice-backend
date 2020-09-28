import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionModule } from './question/question.module';

@Module({
  imports: [TypeOrmModule.forRoot(), QuestionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
