import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Controller('/user')
export class UserController {
    constructor(private prisma: PrismaService) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() body: any) {

        // this.prisma.user
    }
}