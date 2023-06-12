import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type ProjectsDocument = HydratedDocument<Projects>;

@Schema({ timestamps: true })
export class Projects {
  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref:'Description'  }])
	description_id:mongoose.Schema.Types.ObjectId;

	@Prop()
	title:string;

	@Prop()
	preview:string;

	@Prop()
	demo:string;
}

export const ProjectsSchema = SchemaFactory.createForClass(Projects);
