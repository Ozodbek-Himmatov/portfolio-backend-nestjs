import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type AdminDocument = HydratedDocument<Admin>;

@Schema({ timestamps: true })
export class Admin {
  @Prop()
	fullname:string;	

	@Prop()
	password:string;

	@Prop()
	email:string;

	@Prop()
	phone:string;

	@Prop()
	token:string;

	@Prop()
	description:string;

	@Prop()
	avatar:string;

	;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);
