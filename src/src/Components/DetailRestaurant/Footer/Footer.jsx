import React from 'react'
import Flag from '../../../../assets/imgDetailRestaurant/FlagOfBenin1.png'
import FaseboockAndTwiter from '../../../../assets/imgDetailRestaurant/faceboockAndInstagram.png'
//Style
import {
    ContainerFooter,
    ContainerInfo,
    ImageBenin,
    SocietyName,
    PhoneNumber,
    EmailOkraEats,
} from './FooterStyle'

const Footer = () => {
  return (
    <ContainerFooter>
        <ContainerInfo>
            <ImageBenin src={Flag} alt='logo'/>
            <SocietyName>Okra eats</SocietyName>
            <PhoneNumber>+229 (51) 87 62 87</PhoneNumber>
            <EmailOkraEats>info@okraeats.com</EmailOkraEats>
            <img src={FaseboockAndTwiter} alt='icon' style={{margin:'1%',cursor:'pointer'}}/>
        </ContainerInfo>
    </ContainerFooter>
  )
}

export default Footer