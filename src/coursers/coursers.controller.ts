import { Controller, Get, Param } from '@nestjs/common';

@Controller('coursers')
export class CoursersController {
  @Get('list')
  findAll(): string {
    return 'Todos';
  }

  @Get(':id')
  findById(@Param('id') id: string): string {
    return `Id: ${id}`;
  }
}
