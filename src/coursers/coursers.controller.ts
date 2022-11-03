import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CoursersService } from './coursers.service';

@Controller('coursers')
export class CoursersController {
  constructor(private readonly coursersService: CoursersService) {}
  @Get('list')
  findAll() {
    return this.coursersService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.coursersService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body('name') name: string) {
    return this.coursersService.create(name);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.coursersService.update(id, body);
  }

  @Delete(':id')
  deletar(@Param('id') id: string) {
    return this.coursersService.remove(id);
  }
}
