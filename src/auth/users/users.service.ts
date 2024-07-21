import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePartnerUserDto } from './dto/create-partner-user.dto';
import { CreateCommonUserDto } from './dto/create-common-user.dto';
import { UserRoles } from './user-roles';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {

    constructor(private prismaService: PrismaService) {}

    createPartnerUser(data: CreatePartnerUserDto) {
        return this.prismaService.user.create({
            data: {
                ...data,
                password: this.generateHash(data.password),
                roles: [UserRoles.PARTNER],
            },
        });
    }

    createCommonUser(data: CreateCommonUserDto) {
        return this.prismaService.user.create({
            data: {
                ...data,
                password: this.generateHash(data.password),
                roles: [UserRoles.USER],
            },
        });
    }

    generateHash(pass: string) {
        return bcrypt.hashSync(pass, 10);
    }
}
