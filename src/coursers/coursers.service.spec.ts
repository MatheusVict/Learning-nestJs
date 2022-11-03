import { Test, TestingModule } from '@nestjs/testing';
import { CoursersService } from './coursers.service';

describe('CoursersService', () => {
  let service: CoursersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoursersService],
    }).compile();

    service = module.get<CoursersService>(CoursersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
