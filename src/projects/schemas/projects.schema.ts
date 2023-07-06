import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type ProjectsDocument = HydratedDocument<Projects>;

@Schema({ timestamps: true })
export class Projects {
	
	@Prop()
	title:string;

	@Prop()
	description:string;

	@Prop()
	preview:string;

	@Prop()
	demo:string;

	;
}

export const ProjectsSchema = SchemaFactory.createForClass(Projects);
