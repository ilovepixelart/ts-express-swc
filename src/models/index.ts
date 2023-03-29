import MongooseClient from '../clients/MongooseClient'
import User from './User'

const getModels = async () => {
  await MongooseClient.connect()

  return {
    User
  }
}

export default getModels
