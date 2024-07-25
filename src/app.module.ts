import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { PartnersModule } from './partners/partners.module';

@Module({
  imports: [EventsModule, AuthModule, PrismaModule, PartnersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
