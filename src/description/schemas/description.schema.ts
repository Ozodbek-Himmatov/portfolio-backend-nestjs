import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type DescriptionDocument = HydratedDocument<Description>;

@Schema({ timestamps: true })
export class Description {
  @Prop()
	title:string;

	@Prop()
	description:string;

	;
}

export const DescriptionSchema = SchemaFactory.createForClass(Description);
