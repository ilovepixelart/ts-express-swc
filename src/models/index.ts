import MongooseClient from '../clients/MongooseClient'
import User from './User'

import type { Mongoose, Model } from 'mongoose'
import type IUser from '../interfaces/IUser'

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
