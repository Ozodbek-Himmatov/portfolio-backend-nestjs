import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type ImagesDocument = HydratedDocument<Images>;

@Schema({ timestamps: true })
export class Images {
  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref:'Projects'  }])
	project_id:mongoose.Schema.Types.ObjectId;

	@Prop()
	title:string;

	@Prop()
	img:string;

	;
}

export const ImagesSchema = SchemaFactory.createForClass(Images);
