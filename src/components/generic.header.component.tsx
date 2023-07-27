import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from '../constants/colors';

const GenericHeader = (props: any) => {
  const {title, onBackPressed} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          onBackPressed();
        }}
        activeOpacity={0.7}>
        <Image
          source={require('../images/back_icon.png')}
          style={styles.backIcon}
        />
      </TouchableOpacity>
      <Text style={styles.headerTitleStyle}>{title}</Text>
    </View>
  );
};

export default GenericHeader;

const styles = StyleSheet.create({
  container: {
    height: 48,
    elevation: 1,
    backgroundColor: Colors.WHITE,
    shadowColor: Colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.84,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  backIcon: {
    height: 25,
    width: 25,
    marginRight: 10,
  },
  headerTitleStyle: {
    fontSize: 16,
    color: Colors.BLACK,
  },
});
