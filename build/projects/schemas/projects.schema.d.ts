import mongoose, { HydratedDocument } from 'mongoose';
export type ProjectsDocument = HydratedDocument<Projects>;
export declare class Projects {
    description_id: mongoose.Schema.Types.ObjectId;
    title: string;
    preview: string;
    demo: string;
}
export declare const ProjectsSchema: mongoose.Schema<Projects, mongoose.Model<Projects, any, any, any, mongoose.Document<unknown, any, Projects> & Omit<Projects & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Projects, mongoose.Document<unknown, {}, mongoose.FlatRecord<Projects>> & Omit<mongoose.FlatRecord<Projects> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
