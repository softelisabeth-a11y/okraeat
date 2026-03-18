import { createGlobalStyle } from "styled-components";

export const GloblaStyles = createGlobalStyle`
    /* Global styles */
*,
h1,
h2,
h3,
h4,
h5,
h6,
p,
span {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}
body {
    background-color :#FBFBFB ;
    font-family: 'Roboto', sans-serif;
    padding:0;
    margin: 0;
}

:root {
    
    /*------------ COLORS ---------------*/
--primary-color:#F05801;
--primary-white:#ffffff;
--primary-black:#020101;


--primary-cendre:#DFDFDF;
--primary-verte:#00972F;
--primary-color1:#CD0C8A;
--primary-arrirePlan:#E0E0E0;

}
`
