import { useNavigate } from 'react-router-dom'

// components 
import { Image } from '../../Components/Home/Images/ImageStyle'
import { Buttons } from '../../Components/Home/Button/ButtonStyle'
import FaceIcone from '../../../assets/Home/svg/FaceIcone'

// photos 
import Logo from '../../../assets/Home/png/logo1.png'
import googleLogo from '../../../assets/Home/png/googleLogo.png'



// styled 
import { ContainerLogin, SousContainer } from './HeroStyle'

function Login() {

  const navigate = useNavigate()

  const googleAuth = () => {
    window.open("http://localhost:5000/okraeat/auth/google/callback", "_self");
  };

  const facebookAuth = () => {
    window.open("http://localhost:5000/okraeat/face/facebook/callback","_self");
};

  return (
    <ContainerLogin>
      <SousContainer>



        <Image src={Logo} width={98} height={50} />

        <div className='container_btn_login'>
          <Buttons login_btn onClick={facebookAuth}><FaceIcone /> <span>SE CONNECTER AVEC FACEBOOK</span>  </Buttons>


          <div className='separation'>
            <div className='line'></div>
            <span>Ou</span>
            <span className='line'></span>
          </div>

          <Buttons login_btn onClick={googleAuth}><Image src={googleLogo} width={30} height={30} />  <span>SE CONNECTER AVEC GMAIL</span></Buttons>

        </div>


      </SousContainer>
    </ContainerLogin>
  )
}

export default Login
