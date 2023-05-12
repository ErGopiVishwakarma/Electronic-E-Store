import { useSelector } from 'react-redux'
import Admin from './AdminProfile'
import Users from './Users'
import Products from './Products'
import Dashboard from './Dashboard'

const AdminBody = () => {
  
  const {dash,user,admin,product} = useSelector(store=>store.adminReducer)
  if(dash){
    return <Dashboard />
  }else if(user){
    return <Users />
  }else if(admin){
    return <Admin />
  }else if(product){
    return <Products />
  }
}

export default AdminBody