import React from 'react'
import Shrey from './Shrey'
import Shrey1 from './Shrey1'
import Shrey2 from './Shrey2'
import Shrey3 from './Shreya3'
import styledComponents from 'styled-components'
function Home() {
  return (
      <HiIamContainer>
    <Shrey
    title="model X"
    descriptionImg="test"
    backgroundImg="model-x.jpg"
    buttontext="Custom Order"
    
    />

<Shrey1
    title="model Y"
    descriptionImg="test"
    backgroundImg="model-y.jpg"
    buttontext="Custom Order"
     
   
   />
    <Shrey2
    title="model 3"
    descriptionImg="test"
    backgroundImg="model-3.jpg"
    buttontext="Custom Order"
    />

<Shrey3
    title="model S"
    descriptionImg="test"
    backgroundImg="model-s.jpg"
    buttontext="Custom Order"
    
    />

    </HiIamContainer>
  )
}

export default Home
const HiIamContainer=styledComponents.div``