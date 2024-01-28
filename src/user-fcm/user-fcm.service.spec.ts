import { Test, TestingModule } from '@nestjs/testing';
import { UserFcmService } from './user-fcm.service';

describe('UserFcmService', () => {
  let service: UserFcmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserFcmService],
    }).compile();

    service = module.get<UserFcmService>(UserFcmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
