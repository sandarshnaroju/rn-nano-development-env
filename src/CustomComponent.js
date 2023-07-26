import {Button, Dialog, Portal, Provider, Text} from 'react-native-paper';
import {View} from 'react-native';
import React from 'react';

function CustomDialog({nanoProps}) {
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);
  console.log('custtom', nanoProps);

  const hideDialog = () => setVisible(false);
  // return <View style={{height: 30, width: 50, backgroundColor: 'red'}}></View>;
  return (
    <Portal>
      <Dialog visible={visible} onDismiss={hideDialog}>
        <Dialog.Title>Alert</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium">This is simple dialog</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Done</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
}

const customDialogObj = {
  name: 'Popup',
  component: CustomDialog,
  props: {hello: true},
};
export default customDialogObj;
