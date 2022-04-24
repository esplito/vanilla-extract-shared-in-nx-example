// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import { themeClass, exampleStyle } from '@ui/shared-styling';

export function App() {
  return (
    <div className={themeClass}>
      <h1 className={exampleStyle}>Hejsan!</h1>
    </div>
  );
}

export default App;
