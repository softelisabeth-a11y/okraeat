// components 
import Header from '../../Components/Home/Header/Header'
import Search from '../../Components/Home/Seach/Search'
import BodyHome from '../../Components/Home/Body/BodyHome'


// styled components 
import { ContainerAcceuil } from './HomeStyle'


function Home({user}) {
  return (

    <ContainerAcceuil>

      <Header user={user}/>

      {/* <Search/> */}

      <BodyHome/>


        


    </ContainerAcceuil>
  )
}

export default Home