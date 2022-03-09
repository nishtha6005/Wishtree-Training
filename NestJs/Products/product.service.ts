import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { ProductDTO, VendorDTO } from "./dto";
import { ProductSchema, VendorSchema } from "./schema";

@Injectable()
export class ProductService{
    constructor(@InjectModel('Product') private readonly productModel:Model<typeof ProductSchema>,
                @InjectModel('Vendor') private readonly vendorModel:Model<typeof VendorSchema>){}

    async addVendor(vendor:VendorDTO){
        const list = await this.getProductByManufacturer(vendor.manufacturer)
        list.map(item=>vendor.products.push(item))
        return await this.vendorModel.create(vendor)
    }

    async getProducts(){
        const result = await this.productModel.find().exec()
        return result
    }

    async getProductByManufacturer(productManufacturer){
        let result:any
        result = await this.productModel.find({manufacturer:productManufacturer}).exec()
        const product=result.map((prod:any)=>{
            return prod.name
        })
        return product
    }

    async addProduct(product:ProductDTO){
        return await this.productModel.create(product) 
    }
}