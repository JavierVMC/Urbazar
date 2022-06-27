import bcrypt from 'bcryptjs'

async function EncryptPassword(password) {
  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(password, salt)
}

export default EncryptPassword
