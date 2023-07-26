import {NANO} from '../../../react-native-nano';
import HomeScreenFunctions from './homelogic';

const ExampleElements = [
  'ActivityIndicator',
  'Avatar',
  'Badge',
  'Banner',
  'Checkbox',
  'Button',
];
const text = {
  component: NANO.TEXT,
  name: 'itemName',
  value: 'Normal',
  props: {
    style: {
      fontSize: 16,

      paddingVertical: 5,
      paddingHorizontal: 15,

      height: 50,
      textAlignVertical: 'center',
    },
  },

  onClick: ({navigation, uiElements, value, Permissions, session, db}) => {
    // Permissions.requestPermissions([PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE])
    //   .then(val => {
    //     console.log('request', val);
    //   })
    //   .catch(val => {
    //     console.log('request errrr', val);
    //   });
    // Permissions.checkIfPermissionsGranted([
    //   PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
    // ])
    //   .then(val => {
    //     console.log('vallll', val);
    //   })
    //   .catch(val => {
    //     console.log('errrr', val);
    //   });
    // session.setValue('hello', '7777777777777777777');
    // console.log('sssssssssss', session.getValue('hello'));
    // navigation.navigate('Welcome');

    db.setNanoConfig('Helllo', {vel: '76'});
    db.getNanoConfig('Helllo');
    // console.log('red', db.getNanoConfig('Helllo'));

    return uiElements;
  },
  onLongClick: elements => {},
};
// const custom = {
//   component: 'Popup',
//   name: 'itemName',
//   value: 'Normal',
//   props: {
//     style: {
//       fontSize: 16,

//       paddingVertical: 5,
//       paddingHorizontal: 15,

//       height: 50,
//       textAlignVertical: 'center',
//     },
//   },

//   onClick: ({navigation, uiElements, value, Permissions, session, db}) => {
//     return uiElements;
//   },
//   onLongClick: elements => {},
// };
const checkbox = {
  component: NANO.CHECKBOX,
  value: true,
  name: 'itemValue',

  props: {
    style: {},
  },

  onClick: (navigation, elements, value) => {
    return elements;
  },
  onLongClick: elements => {},
};

const textandcheckbox = {
  component: NANO.VIEW,

  content: [text, checkbox],

  props: {
    style: {
      paddingHorizontal: 10,

      justifyContent: 'space-between',
      flexDirection: 'row',
      flex: 1,
      borderBottomWidth: 0.2,
      borderBottomColor: 'gray',
      alignItems: 'center',
    },
  },

  onClick: ({navigation, uiElements, value}) => {
    // console.log('sssssssss');

    return uiElements;
  },
  onLongClick: elements => {},
};
const list = {
  component: NANO.LIST_VIEW,
  listData: ExampleElements,

  mapper: data => {
    return {
      itemValue: true,
      itemName: data,
    };
  },
  itemview: textandcheckbox,
  itemHeight: 50,
  itemWidth: null,

  props: {
    visible: true,
    style: {},
    color: 'blue',
  },

  onClick: 'textitemonpress',
  onLongClick: 'textitemonlongpress',
};

// const flatlist = {
//   component: NANO.FLAT_LIST,
//   itemview: textandcheckbox,
//   data: ExampleElements,
//   mapper: data => {
//     return {
//       value: data,
//     };
//   },
// };
// const screen1 = {
//   v1: [text, custom],
// };

// const topTabScreens = [
//   {
//     name: 'Feed',
//     screen: screen1,
//     logic: HomeScreenFunctions,
//     screenProps: {
//       options: {
//         tabBarLabelStyle: {textTransform: 'none'},
//         tabBarIcon: 'pencil',
//       },
//     },
//     style: {flex: 1, borderWidth: 1, borderColor: 'red'},
//   },
//   {
//     name: 'Discussion',
//     screen: screen1,
//     logic: HomeScreenFunctions,
//     screenProps: {
//       options: {
//         title: 'Testing',
//         tabBarLabelStyle: {textTransform: 'none'},
//         tabBarIcon: 'folder',
//       },
//     },
//   },
// ];

// const toptab = {
//   name: 'Homepage',
//   content: topTabScreens,
//   component: NANO.TOP_TABS,
//   navigatorProps: {initialRouteName: 'toptabHome2'},
// };
// const bottomtab = {
//   name: 'Homepage',
//   content: topTabScreens,
//   component: NANO.BOTTOM_TABS,
//   navigatorProps: {
//     initialRouteName: 'Discussion',
//     barStyle: {
//       backgroundColor: 'blue',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     activeColor: 'white',
//     inactiveColor: 'white',
//   },
// };
// const drawertabs = {
//   name: 'Homepage',
//   content: topTabScreens,
//   component: NANO.DRAWER,
//   navigatorProps: {
//     // initialRouteName: 'Discussion',
//     // barStyle: {
//     //   backgroundColor: 'blue',
//     //   alignItems: 'center',
//     //   justifyContent: 'center',
//     // },
//     // activeColor: 'white',
//     // inactiveColor: 'white',
//   },
// };
const menu = {
  component: NANO.AVATAR_ICON,
  value: 'home',
  props: {
    style: {},
  },

  onClick: ({navigation, uiElements, value, Permissions, session, db}) => {
    return uiElements;
  },
  onLongClick: elements => {},
};

const anticon = {
  component: NANO.CUSTOM_ICON,
  value: 'code-branch',
  props: {
    style: {},
  },

  onClick: ({navigation, uiElements, value, Permissions, session, db}) => {
    return uiElements;
  },
  onLongClick: elements => {},
};

const HomeScreenObj = {
  v1: [list],
};

const HomeScreen = {
  name: 'Home',
  screen: HomeScreenObj,
  logic: HomeScreenFunctions,
  onStart: 'onHomeScreenStart',
  onEnd: 'onHomeScreenEnd',
  screenProps: {options: {headerShown: false}},
  style: {},
};
export default HomeScreen;
