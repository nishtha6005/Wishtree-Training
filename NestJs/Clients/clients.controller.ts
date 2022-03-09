import { Controller, Get } from '@nestjs/common';
import { ClientService } from './clients.service';

@Controller()
export class ClientController{
    constructor(private readonly clientService:ClientService){}

    @Get('/client')
    getClient():any{
        return this.clientService.getClient()
    }
}