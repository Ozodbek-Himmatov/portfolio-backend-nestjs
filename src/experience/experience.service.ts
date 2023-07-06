import { Injectable } from '@nestjs/common';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
import { Experience, ExperienceDocument } from './schemas/experience.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ExperienceService {
  constructor(
    @InjectModel(Experience.name)
    private experienceModel: Model<ExperienceDocument>,
  ) {}

  async create(createExperienceDto: CreateExperienceDto) {
    const res = await new this.experienceModel(createExperienceDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.experienceModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.experienceModel.findById(id).exec();
  }

  async update(id: string, updateExperienceDto: UpdateExperienceDto) {
    return this.experienceModel
      .findByIdAndUpdate(id, updateExperienceDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.experienceModel.findByIdAndDelete(id).exec();
  }
}
