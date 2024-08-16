import { useState } from 'react';
import AppNavbar from './components/AppNavbar';
import WelcomeLoader from './components/WelcomeLoader';

function App() {

    const [loading, setLoading] = useState(true);
  
    const handleLoaderComplete = () => {
      setLoading(false);
    };

  return (
    <div>
      {loading ? (
        <WelcomeLoader onComplete= {handleLoaderComplete} />
      ) : (
        <AppNavbar/>
      )}
    </div>
  );
}

export default App;
