import { Body, ConflictException, Controller, HttpCode, HttpStatus, Post, UsePipes } from "@nestjs/common";
import { hash } from "bcryptjs";
import { ZodValidationPipe } from "src/pipes/zod-validation-pipe";
import { PrismaService } from "src/prisma/prisma.service";
import { z } from "zod";

const createUserBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string()
})

type CreateUserBodySchema = z.infer<typeof createUserBodySchema>

@Controller('/user')
export class UserController {
    constructor(private prisma: PrismaService) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @UsePipes(new ZodValidationPipe(createUserBodySchema))
    async create(@Body() body: CreateUserBodySchema) {
        try {
            const { email, name, password } = body;
            const emailIsUsed = await this.prisma.user.findFirst({ where: { email }})
    
            if (emailIsUsed) throw new ConflictException("Email already registered");
    
            const passwordHash = await hash(password, 5);
            const user = await this.prisma.user.create({ 
                data: {
                    name,
                    email,
                    password: passwordHash
                }
             });
    
            return { user }
        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}