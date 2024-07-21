import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRoles } from './user-roles';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {

    constructor(private prismaService: PrismaService) {}

    create(data: CreateUserDto) {
        return this.prismaService.user.create({
            data: {
                ...data,
                password: this.generateHash(data.password),
                roles: [UserRoles.PARTNER],
            },
        });
    }

    generateHash(pass: string) {
        return bcrypt.hashSync(pass, 10);
    }
}
