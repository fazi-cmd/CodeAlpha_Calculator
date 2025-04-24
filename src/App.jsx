import Display from './assets/components/display'
import './App.css'
import Container from './assets/components/Container'
import Button from './assets/components/buttoncontainers'
import { useState } from 'react'
function App() {
       const [Calval, setResult] = useState("");
const handleButtonClick = (buttonText)=>{
  if (buttonText === "C") {
    setResult("");
  }
  else if (buttonText === "=") {
    const newValue = eval(Calval);  
    setResult(newValue);
  }
  else{
    const newValue = Calval + buttonText;
    setResult(newValue);
  }
}
  return (
    <Container>

       <Display Calval={Calval}></Display>
      <Button onButtonClick={handleButtonClick}></Button>
    </Container>
  )
}

export default App
