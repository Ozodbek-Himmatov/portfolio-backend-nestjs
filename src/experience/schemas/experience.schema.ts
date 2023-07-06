import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type ExperienceDocument = HydratedDocument<Experience>;

@Schema({ timestamps: true })
export class Experience {
  @Prop()
	name:string;

	@Prop()
	position:string;

	@Prop()
	time:string;
}

export const ExperienceSchema = SchemaFactory.createForClass(Experience);
