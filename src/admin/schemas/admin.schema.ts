import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type AdminDocument = HydratedDocument<Admin>;

@Schema({ timestamps: true })
export class Admin {
  @Prop()
  fullname: string;

  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  token: string;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);