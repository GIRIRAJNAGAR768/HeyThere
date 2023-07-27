import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../constants/colors';
import {GenericButtonInterface} from '../constants/interfaces';

const GenericButton = (props: GenericButtonInterface) => {
  const {title, onButtonPressed, customStyle} = props;

  return (
    <TouchableOpacity
      style={{
        ...customStyle,
        ...styles.container,
      }}
      onPress={() => {
        onButtonPressed();
      }}
      activeOpacity={0.7}>
      <Text style={styles.titleStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default GenericButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: 50,
    minWidth: 200,
    backgroundColor: Colors.PICKTON_BLUE,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    color: Colors.WHITE,
    fontSize: 20,
  },
});
