import { useState } from 'react';
import WelcomeLoader from './components/WelcomeLoader';
import All from './components/All';

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
        <All/>
      )}
    </div>
  );
}

export default App;
