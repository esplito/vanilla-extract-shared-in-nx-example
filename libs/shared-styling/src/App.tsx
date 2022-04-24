import { useState } from 'react';
import { themeClass, exampleStyle } from './theme.css.ts';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={themeClass}>
      <header>
        <p className={exampleStyle}>hej</p>
      </header>
    </div>
  );
}

export default App;
