import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { QuestionEntity } from './question.entity';

@Injectable()
export class QuestionService extends TypeOrmCrudService<QuestionEntity> {
  constructor(@InjectRepository(QuestionEntity) repo) {
    super(repo);
  }
}
