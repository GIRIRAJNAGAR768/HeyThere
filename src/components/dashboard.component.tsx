import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors} from '../constants/colors';
import {Strings} from '../constants/strings';
import {ActiveComponents} from '../constants/enums';
import GenericButton from './generic.button.component';

interface DashboardComponentInterface {
  onSelectActiveComponent: (activeComponent: ActiveComponents) => void;
}

const DashboardComponent = (props: DashboardComponentInterface) => {
  const {onSelectActiveComponent} = props;
  return (
    <View style={styles.container}>
      {/* Button for chat screen */}
      <GenericButton
        title={Strings.ChatScreen}
        onButtonPressed={() => {
          onSelectActiveComponent(ActiveComponents.ChatComponent);
        }}
      />

      {/* Button for chat screen */}
      <GenericButton
        title={Strings.MapScreen}
        onButtonPressed={() => {
          onSelectActiveComponent(ActiveComponents.MapComponent);
        }}
      />
    </View>
  );
};

export default DashboardComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.CHARDONNAY,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
