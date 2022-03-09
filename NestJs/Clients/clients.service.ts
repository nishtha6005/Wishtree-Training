import { Injectable } from '@nestjs/common';
import { ClientDTO } from './clients.dto';

@Injectable()
export class ClientService{
    // constructor(private readonly clientService:ClientService){}
    client:ClientDTO={
        name:'Client 1',
        address:'Addresss 1',
        mobileNo:9863765241
    };

    getClient():any{
        return this.client
    }
}