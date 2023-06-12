import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type PostReactionsDocument = HydratedDocument<PostReactions>;

@Schema({ timestamps: true })
export class PostReactions {
  @Prop([{ type: mongoose.Schema.Types.ObjectId, ref:'Reactions'  }])
	reaction_id:mongoose.Schema.Types.ObjectId;

	@Prop([{ type: mongoose.Schema.Types.ObjectId, ref:'Posts'  }])
	post_id:mongoose.Schema.Types.ObjectId;

	@Prop([{ type: mongoose.Schema.Types.ObjectId, ref:'Users'  }])
	user_id:mongoose.Schema.Types.ObjectId;

	@Prop()
	quantity:number;
}

export const PostReactionsSchema = SchemaFactory.createForClass(PostReactions);
