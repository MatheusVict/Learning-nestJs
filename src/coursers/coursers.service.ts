import { Injectable } from '@nestjs/common';
import { Courser } from './entities/courser.entity';

@Injectable()
export class CoursersService {
  private courses: Courser[] = [
    {
      id: 1,
      name: 'Aprender Nest',
      description: 'No youtube',
      tags: ['node.js', 'NestJs', 'Angular'],
    },
    {
      id: 2,
      name: 'O dia todo',
      description: 'No youtube',
      tags: ['node.js', 'NestJs', 'Angular'],
    },
    {
      id: 3,
      name: 'Todos os dias Nest',
      description: 'No youtube',
      tags: ['node.js', 'NestJs', 'Angular'],
    },
  ];

  findAll() {
    return this.courses;
  }

  findOne(id: string) {
    return this.courses.find((course) => course.id === Number(id));
  }

  create(createCoursersDto: any) {
    this.courses.push(createCoursersDto);
  }

  update(id: string, updateCoursersDto: any) {
    const indexCourser = this.courses.findIndex(
      (courser) => courser.id === Number(id),
    );

    this.courses[indexCourser] = updateCoursersDto;
  }

  remove(id: string) {
    const indexCourser = this.courses.findIndex(
      (courser) => courser.id === Number(id),
    );

    if (indexCourser >= 0) {
      this.courses.splice(indexCourser);
    }
  }
}
