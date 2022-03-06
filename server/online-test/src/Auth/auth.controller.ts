import { Body, Controller, Post } from "@nestjs/common";
import { AuthDTO } from "./auth.dto";
import { AuthService } from "./auth.service";


@Controller('user')
export class AuthController{
    constructor(private readonly userService:AuthService){}

    @Post('login')
    async userLogin(@Body() user:AuthDTO){
        return this.userService.userLogin(user)
    }
}