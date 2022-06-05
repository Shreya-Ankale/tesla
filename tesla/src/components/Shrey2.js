import React from 'react'
import styledComponents from 'styled-components'
function Shrey2({backgroundImg,title,description}) {
  return (
      <Wrap bgImage={backgroundImg}>
          <TeslaTitle>
              <h1>
                  {title}
                  
              </h1>
              <p>{description}</p>
          </TeslaTitle>
      </Wrap>      
  )
  
}

export default Shrey2
const Wrap=styledComponents.div`
width:25vw;
height:50vh;
float:right;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
background
display:flex;
flex-direction:column;
justify-content:space-between;
align-item:center;
background-image: ${props=>`url("/images/${props.bgImage}")`}


`
const TeslaTitle=styledComponents.div`
padding-top:1vh;
text-align:center;
`

