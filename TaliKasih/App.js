import 'react-native-gesture-handler';
import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './src/navigation/AppStack';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);

import {Provider} from 'react-redux';
import storeRedux from './src/redux/store';

const App = () => {
  return (
    <Provider store={storeRedux}>
      <NavigationContainer
        linking={{
          prefixes: ['https://talikasih.com/'],
          enabled: true,
          config: {
            screens: {
              Main: {
                path: 'campaigndetails/:id',
                parse: {
                  id: id => {
                    return `${id}`;
                  },
                },
              },
            },
          },
        }}>
        <AppStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
