import { Controller, Get } from '@nestjs/common';

@Controller('coursers')
export class CoursersController {
  @Get('list')
  findAll(): string {
    return 'Todos';
  }
}
