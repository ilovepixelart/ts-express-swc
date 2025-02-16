import MongooseClient from '../clients/MongooseClient.js'
import User from './User.js'

import type { Model, Mongoose } from 'mongoose'
import type IUser from '../interfaces/IUser.js'

const getModels = async (): Promise<{
  mongoose: Mongoose
  User: Model<IUser>
}> => {
  const mongoose = await MongooseClient.connect()

  return {
    mongoose,
    User,
  }
}

export default getModels
