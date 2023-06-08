import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type SkillsDocument = HydratedDocument<Skills>;

@Schema({ timestamps: true })
export class Skills {
  @Prop()
	title:string;

	@Prop()
	icon:string;

	@Prop()
	rating:string;

	;
}

export const SkillsSchema = SchemaFactory.createForClass(Skills);
