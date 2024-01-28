import { Test, TestingModule } from '@nestjs/testing';
import { UserFcmController } from './user-fcm.controller';

describe('UserFcmController', () => {
  let controller: UserFcmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserFcmController],
    }).compile();

    controller = module.get<UserFcmController>(UserFcmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
