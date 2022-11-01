import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { response } from 'express';

@Controller('coursers')
export class CoursersController {
  @Get('list')
  findAll(@Res() response): string {
    return response.status(200).send('passou');
  }

  @Get(':id')
  findById(@Param('id') id: string): string {
    return `Id: ${id}`;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body('name') name: string): string {
    return name;
  }
}
