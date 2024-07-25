import { Injectable } from '@nestjs/common';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PartnersService {

  constructor(private prismaService: PrismaService) {}

  create(createPartnerDto: CreatePartnerDto) {
    console.log(createPartnerDto, 'createPartnerDto')
    return 'This action adds a new partner';
  }
}
