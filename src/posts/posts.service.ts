import { Injectable } from '@nestjs/common';
import { CreatePostsDto } from './dto/create-posts.dto';
import { UpdatePostsDto } from './dto/update-posts.dto';
import { Posts, PostsDocument } from './schemas/posts.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Posts.name)
    private postsModel: Model<PostsDocument>,
  ) {}

  async create(createPostsDto: CreatePostsDto) {
    const res = await new this.postsModel(createPostsDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.postsModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.postsModel.findById(id).exec();
  }

  async update(id: string, updatePostsDto: UpdatePostsDto) {
    return this.postsModel
      .findByIdAndUpdate(id, updatePostsDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.postsModel.findByIdAndDelete(id).exec();
  }
}
