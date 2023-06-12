import { Injectable } from '@nestjs/common';
import { CreatePostReactionsDto } from './dto/create-post-reactions.dto';
import { UpdatePostReactionsDto } from './dto/update-post-reactions.dto';
import { PostReactions, PostReactionsDocument } from './schemas/post-reactions.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PostReactionsService {
  constructor(
    @InjectModel(PostReactions.name)
    private postReactionsModel: Model<PostReactionsDocument>,
  ) {}

  async create(createPostReactionsDto: CreatePostReactionsDto) {
    const res = await new this.postReactionsModel(createPostReactionsDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.postReactionsModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.postReactionsModel.findById(id).exec();
  }

  async update(id: string, updatePostReactionsDto: UpdatePostReactionsDto) {
    return this.postReactionsModel
      .findByIdAndUpdate(id, updatePostReactionsDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.postReactionsModel.findByIdAndDelete(id).exec();
  }
}
