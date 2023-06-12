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
    private imagesModel: Model<ImagesDocument>,
  ) {}

  async create(createImagesDto: CreateImagesDto) {
    const res = await new this.imagesModel(createImagesDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.imagesModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.imagesModel.findById(id).exec();
  }

  async update(id: string, updateImagesDto: UpdateImagesDto) {
    return this.imagesModel
      .findByIdAndUpdate(id, updateImagesDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.imagesModel.findByIdAndDelete(id).exec();
  }
}
