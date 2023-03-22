import { Schema, model } from 'mongoose'

import type IUser from '../interfaces/IUser'

const UserSchema = new Schema<IUser>({
  firstName: {
    type: String,
    required: true,
    index: true
  },
  lastName: {
    type: String,
    index: true
  }
}, { timestamps: true })

const User = model<IUser>('User', UserSchema)

export default User
