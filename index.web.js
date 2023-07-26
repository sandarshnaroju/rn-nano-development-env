import React from 'react';
import {createRoot} from 'react-dom/client';
import {LogBox} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import App from './App.web';

// import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

// Generate required css
// import iconFont from 'react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf';
// const iconFontStyles = `@font-face {
//   src: url(${iconFont}) format('truetype');
//   font-family: "MaterialCommunityIcons";
//   font-display:"swap";
//   font-weight: 'normal';
//   font-style: "normal";
// }`;

// Create stylesheet
// const style = document.createElement('style');
// style.type = 'text/css';
// if (style.styleSheet) {
//   style.styleSheet.cssText = iconFontStyles;
// } else {
//   style.appendChild(document.createTextNode(iconFontStyles));
// }

// // Inject stylesheet
// document.head.appendChild(style);
export default function Main() {
  LogBox.ignoreAllLogs(true);
  return (
    <PaperProvider>
      <React.Fragment>
        <App />
      </React.Fragment>
    </PaperProvider>
  );
}
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Main />);
