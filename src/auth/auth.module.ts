import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { PartnerUsersController } from './partner-users/partner-users.controller';

@Module({
  imports: [],
  controllers: [UsersController, PartnerUsersController],
  providers: [UsersService]
})
export class AuthModule {}
