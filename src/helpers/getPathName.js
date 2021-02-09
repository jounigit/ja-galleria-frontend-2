import { useLocation } from 'react-router'

export const usePathname = () => {
  const location = useLocation()
  return location.pathname
}