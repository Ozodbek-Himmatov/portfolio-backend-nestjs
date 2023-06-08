import { Injectable } from '@nestjs/common';
import { CreateImagesDto } from './dto/create-images.dto';
import { UpdateImagesDto } from './dto/update-images.dto';
import { Images, ImagesDocument } from './schemas/images.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ImagesService {
  constructor(
    @InjectModel(Images.name)
    private orderModel: Model<ImagesDocument>,
  ) {}

  async create(createImagesDto: CreateImagesDto) {
    const res = await new this.orderModel(createImagesDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.orderModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.orderModel.findById(id).exec();
  }

  async update(id: string, updateImagesDto: UpdateImagesDto) {
    return this.orderModel
      .findByIdAndUpdate(id, updateImagesDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.orderModel.findByIdAndDelete(id).exec();
  }
}
