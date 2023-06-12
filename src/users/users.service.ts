import { Injectable } from '@nestjs/common';
import { CreateUsersDto } from './dto/create-users.dto';
import { UpdateUsersDto } from './dto/update-users.dto';
import { Users, UsersDocument } from './schemas/users.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name)
    private usersModel: Model<UsersDocument>,
  ) {}

  async create(createUsersDto: CreateUsersDto) {
    const res = await new this.usersModel(createUsersDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.usersModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.usersModel.findById(id).exec();
  }

  async update(id: string, updateUsersDto: UpdateUsersDto) {
    return this.usersModel
      .findByIdAndUpdate(id, updateUsersDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.usersModel.findByIdAndDelete(id).exec();
  }
}
