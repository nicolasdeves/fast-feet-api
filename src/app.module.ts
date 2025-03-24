import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { ConfigModule } from '@nestjs/config';
import { envSchema } from './env';

@Module({
  imports: [ConfigModule.forRoot({ // .env
    validate: env => envSchema.parse(env),
    isGlobal: true
  })],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
