import mongoose, { HydratedDocument } from 'mongoose';
export type SkillsDocument = HydratedDocument<Skills>;
export declare class Skills {
    title: string;
    icon: string;
    rating: string;
}
export declare const SkillsSchema: mongoose.Schema<Skills, mongoose.Model<Skills, any, any, any, mongoose.Document<unknown, any, Skills> & Omit<Skills & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Skills, mongoose.Document<unknown, {}, mongoose.FlatRecord<Skills>> & Omit<mongoose.FlatRecord<Skills> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
