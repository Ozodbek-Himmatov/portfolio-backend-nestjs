import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type EducationDocument = HydratedDocument<Education>;

@Schema({ timestamps: true })
export class Education {
  @Prop()
	name:string;

	@Prop()
	time:string;
}

export const EducationSchema = SchemaFactory.createForClass(Education);
