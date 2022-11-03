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
import { CreateDto } from './dto/create.dto';
import { UpdateCoursersDto } from './dto/update-coursers.dto';

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
  create(@Body() createCourserDTO: CreateDto) {
    return this.coursersService.create(createCourserDTO);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourserDTO: UpdateCoursersDto) {
    return this.coursersService.update(id, updateCourserDTO);
  }

  @Delete(':id')
  deletar(@Param('id') id: string) {
    return this.coursersService.remove(id);
  }
}
