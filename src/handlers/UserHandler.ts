import { patchEventEmitter } from 'ts-patch-mongoose'
import { USER_CREATED, USER_UPDATED, USER_DELETED } from '../constants/events'

patchEventEmitter.on(USER_CREATED, ({ doc }) => {
  try {
    console.log('Event - user created', doc)
    // Do something with doc here
  } catch (error) {
    console.error(error)
  }
})

patchEventEmitter.on(USER_UPDATED, ({ doc, oldDoc, patch }) => {
  try {
    console.log('Event - user updated', doc, oldDoc, patch)
    // Do something with doc, oldDoc and patch here
  } catch (error) {
    console.error(error)
  }
})

patchEventEmitter.on(USER_DELETED, ({ oldDoc }) => {
  try {
    console.log('Event - user deleted', oldDoc)
    // Do something with doc here
  } catch (error) {
    console.error(error)
  }
})
