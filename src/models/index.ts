import MongooseClient from '../clients/MongooseClient'
import User from './User'

const getModels = async () => {
  const mongoose = await MongooseClient.connect()

  return {
    mongoose,
    User
  }
}

export default getModels
