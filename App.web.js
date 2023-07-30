import React, {useEffect, useState} from 'react';
// import getDatabase from 'react-native-nano/src/modules/database/RealmDatabase';
import {RNNano} from './src/react-native-nano';
import cloneDeep from 'lodash/cloneDeep';
// import AllScreens from './src/src/screens';
import customDialogObj from './src/CustomComponent';

const App = () => {
  let iframeScreens = null;
  const [allScreen, setAllScreen] = useState(iframeScreens);
  const callBack = db => {
    console.log('useeffect callback', db);
  };

  useEffect(() => {
    window.addEventListener('message', function (event) {
      if (event) {
        if (typeof event.data === 'string') {
          if (event.data != null) {
            try {
              iframeScreens = JSON.parse(event.data);
              // console.log(
              //   'in app.web.js',
              //   iframeScreens[0]['screen']['v1'][0]['value'],
              // );
              const cloned = cloneDeep(iframeScreens);
              setAllScreen(cloned);
            } catch (error) {
              console.log('event data parse failed', error);

              iframeScreens = null;
            }
          }
        }
      }
    });
  }, []);
  useEffect(() => {
    // getDatabase(callBack);
  }, []);

  return <RNNano customComponents={[customDialogObj]} screens={allScreen} />;
};

export default App;
