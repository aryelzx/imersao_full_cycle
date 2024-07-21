import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreatePartnerUserDto } from '../users/dto/create-partner-user.dto';
import { UserPresenter } from '../users/use.presenter';

@Controller('partners/users')
export class PartnerUsersController {
    constructor(private usersService: UsersService) {}

    @Post()
    async create(@Body() data: CreatePartnerUserDto) {
      const user = await this.usersService.createPartnerUser(data);
      return new UserPresenter(user)
    }
}
