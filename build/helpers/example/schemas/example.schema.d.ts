import mongoose, { HydratedDocument } from 'mongoose';
export type ExampleDocument = HydratedDocument<Example>;
export declare class Example {
    'props': any;
}
export declare const ExampleSchema: mongoose.Schema<Example, mongoose.Model<Example, any, any, any, mongoose.Document<unknown, any, Example> & Omit<Example & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Example, mongoose.Document<unknown, {}, mongoose.FlatRecord<Example>> & Omit<mongoose.FlatRecord<Example> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
