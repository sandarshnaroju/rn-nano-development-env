/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import App from './src/App';
import {name as appName} from './src/app.json';
LogBox.ignoreLogs(['Warning:']);
console.error = error => error.apply;

AppRegistry.registerComponent(appName, () => App);
