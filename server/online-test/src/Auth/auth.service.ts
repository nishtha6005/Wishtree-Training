import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { AuthDTO } from "./auth.dto";
import { UserSchema } from "./auth.schema";


@Injectable()
export class AuthService{
    constructor(@InjectModel('User') private readonly userSchema:Model<typeof UserSchema>){}
    
    async userLogin(userDto:AuthDTO){
        const result = await this.userSchema.find({user:userDto.user,password:userDto.password})
        if (result.length ===0)
        {
            return "Invalid Credentials"
        }
        else
        return result
    }
}