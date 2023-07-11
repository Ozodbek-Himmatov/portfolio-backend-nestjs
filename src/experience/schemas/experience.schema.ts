import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type ExperienceDocument = HydratedDocument<Experience>;

@Schema({ timestamps: true })
export class Experience {
  @Prop()
  company_name: string;

  @Prop()
  link: string;

  @Prop()
  start_time: Date;

  @Prop()
  end_time: string;
}

export const ExperienceSchema = SchemaFactory.createForClass(Experience);
