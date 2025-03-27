import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { ConfigModule } from '@nestjs/config';
import { envSchema } from './env';
import { AuthenticateController } from './controllers/authenticate.controller';
import { UserController } from './controllers/user.controller';
import { AuthModule } from './auth/auth.module';
import { OrdemController } from './controllers/order.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ // .env
      validate: env => envSchema.parse(env),
      isGlobal: true
    }),
    AuthModule
  ],
  controllers: [UserController, AuthenticateController, OrdemController],
  providers: [PrismaService],
})
export class AppModule {}
