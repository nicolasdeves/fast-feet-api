import { Body, Controller, HttpCode, HttpStatus, Logger, Post, UnauthorizedException, UsePipes } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { compare } from "bcryptjs";
import { ZodValidationPipe } from "src/pipes/zod-validation-pipe";
import { PrismaService } from "src/prisma/prisma.service";
import { z } from "zod";

const authenticateBodySchema = z.object({
    email: z.string().email(),
    password: z.string()
});

type AuthenticateBodySchema = z.infer<typeof authenticateBodySchema>

@Controller('/auth')
export class AuthenticateController {
    constructor(private prisma: PrismaService, private jwt: JwtService) {}

    @Post()
    @HttpCode(HttpStatus.OK)
    @UsePipes(new ZodValidationPipe(authenticateBodySchema))
    async auth(@Body() body: AuthenticateBodySchema) {
        const { email, password } = body;

        const user = await this.prisma.user.findUnique({ where: { email }})

        if (!user) throw new UnauthorizedException('Invalid credentials email');

        const isPasswordValidate = await compare(password, user.password);

        if (!isPasswordValidate) throw new UnauthorizedException('Invalid credentials senha');

        const token = this.jwt.sign({ sub: user.id });

        return { token }
    }   
}