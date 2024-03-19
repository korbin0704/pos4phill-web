import { useEffect } from 'react';
import './App.scss';
import PageRoutes from './components/PageRoutes';

function App() {
  useEffect(() => {
    document.title = 'POS4PHILL';
  }, []);

  return (
    <div className="App">
      <PageRoutes />
    </div>
  );
}

export default App;
