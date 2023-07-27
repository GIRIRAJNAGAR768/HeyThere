import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from '../constants/colors';
import GenericHeader from './generic.header.component';
import {MapComponentInterface} from '../constants/interfaces';
import Mapbox from '@rnmapbox/maps';
import {Strings} from '../constants/strings';

Mapbox.setAccessToken(Strings.MapAccessToken);

const MapComponent = (props: MapComponentInterface) => {
  const {onBackPressed, allUsers, onSelectUser, centerLocation} = props;

  return (
    <View style={styles.container}>
      <GenericHeader
        title={Strings.ActiveUsers}
        onBackPressed={onBackPressed}
      />
      <View style={styles.mapContainer}>
        <Mapbox.MapView
          compassEnabled
          zoomEnabled
          key={'mainmap'}
          style={styles.map}>
          <Mapbox.Camera zoomLevel={13} centerCoordinate={centerLocation} />
          {/* <Mapbox.UserLocation /> */}
          {allUsers?.map((item, index) => {
            return (
              <Mapbox.MarkerView
                key={index}
                coordinate={item?.location}
                allowOverlap={true}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {
                    onSelectUser(item);
                  }}
                  style={styles.userViewBox}>
                  <Text style={styles.userNameStyle}>{item?.name}</Text>
                </TouchableOpacity>
              </Mapbox.MarkerView>
            );
          })}
        </Mapbox.MapView>
      </View>
    </View>
  );
};

export default MapComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  mapContainer: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  userViewBox: {
    padding: 5,
    backgroundColor: Colors.CHARDONNAY_DARK,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userNameStyle: {
    color: Colors.BLACK,
    fontSize: 14,
    fontWeight: '600',
  },
});
