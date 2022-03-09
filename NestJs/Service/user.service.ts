import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService{
    display(action:string,module:string){
        console.log(`Action Type : ${action} | Module :  ${module}`)
    }
}