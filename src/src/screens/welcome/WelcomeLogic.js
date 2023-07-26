const WelcomeScreenFunctions = {
  continuePress: ({
    navigation,
    uiElements,
    index,
    item,
    completeFlatlistData,
    db,
  }) => {
    // navigation.navigate('');
    // console.log('welcome pressed');

    return uiElements;
  },
  increaseCountButtonPress: ({
    navigation,
    uiElements,
    index,
    item,
    completeFlatlistData,
    db,
    route,
    notification,
    session,
  }) => {
    uiElements['v1'][2]['value'] = uiElements['v1'][2]['value'] + 1;

    return uiElements;
  },
  onWelcomeScreenStart: ({
    navigation,
    uiElements,

    db,
    route,
  }) => {
    return uiElements;
  },
  onWelcomeScreenEnd: ({
    navigation,
    uiElements,

    db,
  }) => {
    console.log('ended');

    return uiElements;
  },
};

export default WelcomeScreenFunctions;
