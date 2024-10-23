import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;
    @Schema()
    export class User {
    @Prop({ required: true })
    email: string;
    @Prop({ required: true })
    password: string;
    @Prop({ required: true })
    fname: string;
    @Prop({ required: true })
    lname: string;
    @Prop({ required: true })
    type: string;
}

export const UserSchema = SchemaFactory.createForClass(User);