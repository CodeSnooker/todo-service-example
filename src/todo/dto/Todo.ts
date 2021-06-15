import { IsNotEmpty, IsOptional } from 'class-validator';

export class LocalTodo {
  @IsNotEmpty()
  title: string;

  @IsOptional()
  description?: string;
}
