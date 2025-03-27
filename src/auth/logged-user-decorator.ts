import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { TokenSchema } from "./jwt-strategy";

export const LoggedUser = createParamDecorator(
    (_: unknown, context: ExecutionContext) => {
        const request = context.switchToHttp().getRequest();

        return request.user as TokenSchema;
    }
)

/*
    Usa assim:
    
    async create(@LoggedUser() user: TokenSchema) {
        
    }


*/