import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CategorySchema } from './category.schema';

@Injectable()
export class CategoryService{
    constructor(@InjectModel('Category') private readonly userSchema:Model<typeof CategorySchema>){}
    
    async getCategory(){
        const result = await this.userSchema.find().exec()
        return result
    }
}