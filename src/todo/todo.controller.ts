import { Body, Controller, Post } from '@nestjs/common';
import { Todo } from 'dtos';
import { LocalTodo } from './dto/Todo';

@Controller('todo')
export class TodoController {
  @Post()
  create(@Body() dto: Todo) {
    return dto;
  }

  @Post('local')
  createLocal(@Body() dto: LocalTodo) {
    return dto;
  }
}
