import mongoose, { HydratedDocument } from 'mongoose';
export type AddressesDocument = HydratedDocument<Addresses>;
export declare class Addresses {
    name: string;
    address: string;
    icon: string;
}
export declare const AddressesSchema: mongoose.Schema<Addresses, mongoose.Model<Addresses, any, any, any, mongoose.Document<unknown, any, Addresses> & Omit<Addresses & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Addresses, mongoose.Document<unknown, {}, mongoose.FlatRecord<Addresses>> & Omit<mongoose.FlatRecord<Addresses> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
