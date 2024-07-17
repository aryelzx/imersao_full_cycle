import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRoles } from './user-roles';

@Injectable()
export class UsersService {

    constructor(private prismaService: PrismaService) {}

    create(data: CreateUserDto) {
        console.log(data, '***')
        return this.prismaService.user.create({
            data: {
                ...data,
                roles: [UserRoles.PARTNER],
            },
        });
    }
}
