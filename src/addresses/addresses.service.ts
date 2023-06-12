import { Injectable } from '@nestjs/common';
import { CreateAddressesDto } from './dto/create-addresses.dto';
import { UpdateAddressesDto } from './dto/update-addresses.dto';
import { Addresses, AddressesDocument } from './schemas/addresses.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AddressesService {
  constructor(
    @InjectModel(Addresses.name)
    private addressesModel: Model<AddressesDocument>,
  ) {}

  async create(createAddressesDto: CreateAddressesDto) {
    const res = await new this.addressesModel(createAddressesDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.addressesModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.addressesModel.findById(id).exec();
  }

  async update(id: string, updateAddressesDto: UpdateAddressesDto) {
    return this.addressesModel
      .findByIdAndUpdate(id, updateAddressesDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.addressesModel.findByIdAndDelete(id).exec();
  }
}
