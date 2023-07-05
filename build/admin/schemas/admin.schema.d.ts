import mongoose, { HydratedDocument } from 'mongoose';
export type AdminDocument = HydratedDocument<Admin>;
export declare class Admin {
    fullname: string;
    username: string;
    password: string;
    token: string;
}
export declare const AdminSchema: mongoose.Schema<Admin, mongoose.Model<Admin, any, any, any, mongoose.Document<unknown, any, Admin> & Omit<Admin & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Admin, mongoose.Document<unknown, {}, mongoose.FlatRecord<Admin>> & Omit<mongoose.FlatRecord<Admin> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
