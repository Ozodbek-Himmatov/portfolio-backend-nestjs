import { Injectable } from '@nestjs/common';
import { CreateCommentsDto } from './dto/create-comments.dto';
import { UpdateCommentsDto } from './dto/update-comments.dto';
import { Comments, CommentsDocument } from './schemas/comments.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comments.name)
    private commentsModel: Model<CommentsDocument>,
  ) {}

  async create(createCommentsDto: CreateCommentsDto) {
    const res = await new this.commentsModel(createCommentsDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.commentsModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.commentsModel.findById(id).exec();
  }

  async update(id: string, updateCommentsDto: UpdateCommentsDto) {
    return this.commentsModel
      .findByIdAndUpdate(id, updateCommentsDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.commentsModel.findByIdAndDelete(id).exec();
  }
}
