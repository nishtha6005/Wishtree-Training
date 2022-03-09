import { Controller,Post,Get,Body,Param } from "@nestjs/common";
import { ProductDTO, VendorDTO } from "./dto";
import { ProductService } from "./product.service";

@Controller('product')
export class ProductController{
    constructor(private readonly productService:ProductService){}

    @Post('/vendor/add')
    async addVendor(@Body() vendor:VendorDTO){
        return this.productService.addVendor(vendor)
    }

    @Post('/add')
    async addProduct(@Body() product:ProductDTO){
        return this.productService.addProduct(product)
    }

    @Get('/all')
    async getProducts(){
        return this.productService.getProducts()
    }

    @Get(':manufacturer')
    async getProduct(@Param('manufacturer') mfg:string){
        return this.productService.getProductByManufacturer(mfg)
    }

}