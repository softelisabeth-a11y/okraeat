import React from 'react'

// components 
import { Images } from '../Img/ImgStyle'

// styled
import{FooterContainer} from './FooterStyle'


// assets 
import Flag from '../../../assets/Images/flagbenin.png'
import Facebook from '../../../assets/Images/facebook.png'
import Instagrame from '../../../assets/Images/instagrame.png'


function Footer() {
  return (
    <FooterContainer>

    <div className='allclass'>
    <Images src={Flag}/>
    <span>Okra eats</span>

    </div>

    <div className='allclass'>
    <span>+229 (51) 87 62 87</span>
    <span>info@okraeats.com</span>
    </div>

    <div className='links'>

    <Images src={Facebook} style={{cursor:'pointer'}}/>
    <Images src={Instagrame} style={{cursor:'pointer'}}/>

    </div>
    
    
    
    
    </FooterContainer>
  )
}

export default Footer