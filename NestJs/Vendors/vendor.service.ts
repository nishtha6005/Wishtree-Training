import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { VendorDTO } from "./vendor.dto";
import { VendorSchema } from "./vendor.schema";

@Injectable()
export class VendorService{
    constructor(@InjectModel('Vendor') private readonly vendorModel:Model<typeof VendorSchema>){}

    async getVendors(){
        const result = await this.vendorModel.find().exec()
        return result
    }

    async getVendor(vId:string){
        const result = await this.vendorModel.findById(vId).exec()
        return result
    }

    async addVendor(vendor:VendorDTO){
        return await this.vendorModel.create(vendor) 
    }

    async deleteVendor(vId:string){
        const result = await this.vendorModel.findByIdAndRemove(vId).exec()
        return result
    }

    async updateVendor(vId:string,vendor:VendorDTO){
        const result = await this.vendorModel.findByIdAndUpdate(vId,vendor)
        return result
    }
}