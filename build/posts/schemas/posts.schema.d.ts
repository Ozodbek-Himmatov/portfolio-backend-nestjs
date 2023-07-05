import mongoose, { HydratedDocument } from 'mongoose';
export type PostsDocument = HydratedDocument<Posts>;
export declare class Posts {
    img: string;
    title: string;
    content: string;
    tags: string;
}
export declare const PostsSchema: mongoose.Schema<Posts, mongoose.Model<Posts, any, any, any, mongoose.Document<unknown, any, Posts> & Omit<Posts & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Posts, mongoose.Document<unknown, {}, mongoose.FlatRecord<Posts>> & Omit<mongoose.FlatRecord<Posts> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
