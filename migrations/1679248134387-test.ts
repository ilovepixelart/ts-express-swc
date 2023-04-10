import getModels from '../src/models'

export async function up () {
  console.log('Migration - up')
  const { User } = await getModels()
  // Write migration here
  const created = await User.create([
    {
      name: 'John',
      role: 'user'
    },
    {
      name: 'Alice',
      role: 'user'
    }
  ])
}

export async function down () {
  console.log('Migration - down')
  const { User } = await getModels()
  // Write migration here
  const deleted = await User.deleteMany({ role: 'user' }).exec()
}
