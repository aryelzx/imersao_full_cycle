import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRoles } from './user-roles';

@Injectable()
export class UsersService {

    constructor(private prismaService: PrismaService) {}

    create(data: CreateUserDto) {
        return this.prismaService.user.create({
            data: {
                email: data.email,
                name: data.name,
                password: data.password,
                roles: [UserRoles.PARTNER]
            },
        });
    }
}
