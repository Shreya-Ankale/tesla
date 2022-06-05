import React from 'react'
import styledComponents from 'styled-components'
function Shrey1({backgroundImg,title,description}) {
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

export default Shrey1
const Wrap=styledComponents.div`
width:25vw;
height:50vh;
background-size:cover;
background-position:center;
background-repeat:no-center;
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


