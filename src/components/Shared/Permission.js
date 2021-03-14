/** Function checks permission. Owner of document and admin are granted. */
const permission  = (user, documentUser) => {
  console.log('Grant Access perm: ', documentUser)
  const permission = (user.id === documentUser.toString()) || (user.role === 'admin')
  console.log('Permission params: ', user.role, user.id, documentUser)
  console.log('Grant Access: ', permission)
  return permission
}

export default permission