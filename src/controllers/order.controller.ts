import { Controller, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Controller('/order')
@UseGuards(AuthGuard('jwt')) //passport-jwt
export class OrdemController {
    @Post()
    async create() {
        return { 'ok': 'ok' }
    }
}