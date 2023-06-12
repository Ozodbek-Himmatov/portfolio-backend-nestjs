import { Injectable } from '@nestjs/common';
import { CreateEducationDto } from './dto/create-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';
import { Education, EducationDocument } from './schemas/education.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class EducationService {
  constructor(
    @InjectModel(Education.name)
    private educationModel: Model<EducationDocument>,
  ) {}

  async create(createEducationDto: CreateEducationDto) {
    const res = await new this.educationModel(createEducationDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.educationModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.educationModel.findById(id).exec();
  }

  async update(id: string, updateEducationDto: UpdateEducationDto) {
    return this.educationModel
      .findByIdAndUpdate(id, updateEducationDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.educationModel.findByIdAndDelete(id).exec();
  }
}
