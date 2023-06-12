import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin, AdminDocument } from './schemas/admin.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin.name)
    private adminModel: Model<AdminDocument>,
  ) {}

  async create(createAdminDto: CreateAdminDto) {
    const res = await new this.adminModel(createAdminDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.adminModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.adminModel.findById(id).exec();
  }

  async update(id: string, updateAdminDto: UpdateAdminDto) {
    return this.adminModel
      .findByIdAndUpdate(id, updateAdminDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.adminModel.findByIdAndDelete(id).exec();
  }
}
