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

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `atualização do id:${id} e body ${body.name}`;
  }

  @Delete(':id')
  deletar(@Param('id') id: string) {
    return `Apagado pai o id: ${id}`;
  }
}
