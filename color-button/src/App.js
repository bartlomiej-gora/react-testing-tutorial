import { useState } from 'react/cjs/react.development';
import './App.css';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [disabled, setDisabled] = useState(false);
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  return (
    <div>
      <button
        style={{ backgroundColor: disabled ? 'gray' : buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {newButtonColor}</button>
      <input type="checkbox" defaultChecked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
        id="disable-button-checkbox" />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;