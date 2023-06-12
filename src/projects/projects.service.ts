import { Injectable } from '@nestjs/common';
import { CreateProjectsDto } from './dto/create-projects.dto';
import { UpdateProjectsDto } from './dto/update-projects.dto';
import { Projects, ProjectsDocument } from './schemas/projects.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel(Projects.name)
    private projectsModel: Model<ProjectsDocument>,
  ) {}

  async create(createProjectsDto: CreateProjectsDto) {
    const res = await new this.projectsModel(createProjectsDto).save();
    return res;
  }

  async findAll(query: string) {
    const res = await this.projectsModel.find().exec();
    return res;
  }

  async findOne(id: string) {
    return this.projectsModel.findById(id).exec();
  }

  async update(id: string, updateProjectsDto: UpdateProjectsDto) {
    return this.projectsModel
      .findByIdAndUpdate(id, updateProjectsDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.projectsModel.findByIdAndDelete(id).exec();
  }
}
