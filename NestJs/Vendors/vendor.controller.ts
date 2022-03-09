import { Body, Controller, Get, Param, Post ,Delete, Put} from "@nestjs/common";
import { VendorDTO } from "./vendor.dto";
import { VendorService } from "./vendor.service";

@Controller('vendor')
export class VendorController{
    constructor(private readonly vendorService:VendorService){}

    @Get('all')
    async getVendors(){
        return this.vendorService.getVendors()
    }

    @Get(':id')
    async getVendor(@Param('id') vId:string){
        return this.vendorService.getVendor(vId)
    }

    @Post('add')
    async addVendor(@Body() vendor:VendorDTO){
        this.vendorService.addVendor(vendor)
        return "Record Added"
    }

    @Delete('/delete/:id')
    async deleteVendor(@Param('id') vId:string){
        this.vendorService.deleteVendor(vId)
        return "Record Deleted"
    }

    @Put('/update/:id')
    async updateVendor(@Param('id') vId:string, @Body() vendor:VendorDTO){
        this.vendorService.updateVendor(vId,vendor)
        return "Record Updated"
    }
}