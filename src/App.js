import React, {useEffect} from 'react';
import {RNNano} from './react-native-nano';
const App = () => {
  const callBack = db => {
    console.log('useeffect callback', db);
  };

  useEffect(() => {
    // getDatabase(callBack);
  }, []);
  return <RNNano />;
};

export default App;
