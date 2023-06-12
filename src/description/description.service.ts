import { Injectable } from '@nestjs/common';
import { CreateDescriptionDto } from './dto/create-description.dto';
import { UpdateDescriptionDto } from './dto/update-description.dto';
import { Description, DescriptionDocument } from './schemas/description.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class DescriptionService {
  constructor(
    @InjectModel(Description.name)
    private descriptionModel: Model<DescriptionDocument>,
  ) {}

  async create(createDescriptionDto: CreateDescriptionDto) {
    const res = await new this.descriptionModel(createDescriptionDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.descriptionModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.descriptionModel.findById(id).exec();
  }

  async update(id: string, updateDescriptionDto: UpdateDescriptionDto) {
    return this.descriptionModel
      .findByIdAndUpdate(id, updateDescriptionDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.descriptionModel.findByIdAndDelete(id).exec();
  }
}
