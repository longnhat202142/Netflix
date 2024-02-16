import Featured from '../components/featured/Featured'
import List from '../components/list/List'
import Navbar from '../components/navbar/Navbar'
import './Home.scss'
//import {AcUnit} from "@mui/icons-material"
const Home = () => {
  return (
    <div className='home'>
     <Navbar/>
    
    
     <Featured/>
      <List/> 
    </div>
  )
}

export default Home
