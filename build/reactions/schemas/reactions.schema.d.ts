import mongoose, { HydratedDocument } from 'mongoose';
export type ReactionsDocument = HydratedDocument<Reactions>;
export declare class Reactions {
    name: string;
    img: string;
}
export declare const ReactionsSchema: mongoose.Schema<Reactions, mongoose.Model<Reactions, any, any, any, mongoose.Document<unknown, any, Reactions> & Omit<Reactions & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Reactions, mongoose.Document<unknown, {}, mongoose.FlatRecord<Reactions>> & Omit<mongoose.FlatRecord<Reactions> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
