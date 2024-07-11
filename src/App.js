import './App.css';
import Home from './Pages/Home';
import { ThemeProvider } from './ThemeContext';

function App() {
  return (
    <ThemeProvider>
          <Home />
    </ThemeProvider>

  );
}

export default App;
