import mongoose, {Schema} from "mongoose";
import { User } from "./user.model";

const subscriptionSchema = new Schema({
    subscriber: {
        typeof: Schema.Types.ObjectId,  //one who is subscribing
        ref: User
    },
    channel: {
        typeof: Schema.Types.ObjectId,  //one whom is subscriber is subscribing
        ref: User
    },
}, {timestamps: true})


export const Subscription = mongoose.model("Subscription", subscriptionSchema)