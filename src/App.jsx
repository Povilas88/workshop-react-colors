import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button } from './components/ColorButton';

function App() {
  const [colors, setColors] = useState([]);
  const buttonCount = 4;

  const generateHexColor = (index) => {
    const hexColor = `#${Math.random().toString(16).slice(2, 8)}`;
    const backgroundHexColor = `#${Math.random().toString(16).slice(2, 8)}`;
    const colorArr = [...colors];

    colorArr[index] = hexColor;
    setColors(colorArr);
    document.body.style.backgroundColor = backgroundHexColor;
  };

  const textArr = ['First', 'Second', 'Third', 'Fourth'];
  const classArr = ['btn btn-primary', 'btn btn-secondary', 'btn btn-success', 'btn btn-warning']

  return (
    <div className='mainContainer'>
      <h1>Random color generator</h1>
      <div className='btnContainer'>
        {[...Array(buttonCount)].map((_, index) => (
          <Button
            key={index}
            text={textArr[index]}
            btnClass={classArr[index]}
            changeColor={() => generateHexColor(index)}
            color={colors[index]}
          />
        ))}
      </div>
    </div>
  )
}

export default App
