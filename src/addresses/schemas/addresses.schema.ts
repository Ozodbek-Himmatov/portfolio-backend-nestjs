import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type AddressesDocument = HydratedDocument<Addresses>;

@Schema({ timestamps: true })
export class Addresses {
  @Prop()
	name:string;

	@Prop()
	address:string;

	@Prop()
	icon:string;

	;
}

export const AddressesSchema = SchemaFactory.createForClass(Addresses);
