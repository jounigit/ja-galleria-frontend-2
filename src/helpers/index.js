// import { useContext } from 'react'
// import { AuthContext } from '../contexts/AuthContext'

// const { auth } = useContext(AuthContext)

// const useAuthUser = ({ id }) => {
//   // const isSameUser = id === auth.user.id
//   // isSameUser && setCheckUser
//   return id === auth.user.id
// }

export const isOwner = ({ id, auth }) => auth.user && id === auth.user.id