import mongoose, { HydratedDocument } from 'mongoose';
export type PostReactionsDocument = HydratedDocument<PostReactions>;
export declare class PostReactions {
    reaction_id: mongoose.Schema.Types.ObjectId;
    post_id: mongoose.Schema.Types.ObjectId;
    user_id: mongoose.Schema.Types.ObjectId;
    quantity: number;
}
export declare const PostReactionsSchema: mongoose.Schema<PostReactions, mongoose.Model<PostReactions, any, any, any, mongoose.Document<unknown, any, PostReactions> & Omit<PostReactions & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, PostReactions, mongoose.Document<unknown, {}, mongoose.FlatRecord<PostReactions>> & Omit<mongoose.FlatRecord<PostReactions> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
