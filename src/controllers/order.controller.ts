import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Order, PrismaClient } from "@prisma/client";

@Controller('/order')
@UseGuards(AuthGuard('jwt')) //passport-jwt
export class OrdemController {

    constructor(private prisma: PrismaClient) {}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() order: Order) {
        await this.prisma.order.create({
            data: {
                description: order.description
            }
        })
    }   
}