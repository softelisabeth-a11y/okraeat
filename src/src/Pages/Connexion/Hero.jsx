import React from 'react'

import { useNavigate } from 'react-router-dom'


// styled 
import { ContainerHero } from './HeroStyle'
import {Buttons} from '../../Components/Home/Button/ButtonStyle'


// components 
import { Image } from '../../Components/Home/Images/ImageStyle'

// photos 
import heroLogo from '../../../assets/Home/png/heroLogo.png'

function Hero() {

  const navigate = useNavigate()
  return (
    <ContainerHero>

<Image src={heroLogo} width={182} height={37}/>

<Buttons hero onClick={()=>navigate('home')}>Se Connecter</Buttons>
     
    </ContainerHero>
  )
}

export default Hero
