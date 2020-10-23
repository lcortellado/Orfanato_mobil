import * as React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


import mapMarker from '../images/map-marker.png';
import { RectButton } from 'react-native-gesture-handler';

export default function OrphanagesMap() {
  const navigation = useNavigation();

  function handleNavigateToOrphanageDetails() {
    navigation.navigate('OrphanageDetails');
  }

  function handleNavigateToSelectMapPosition() {
    navigation.navigate('SelectMapPosition');
  }
  function handleNavigateToOrphanageData() {
    navigation.navigate('OrphanageData');
  }
  return (

    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: -25.8061249,
          longitude: -56.4048101,
          latitudeDelta: 0.0008,
          longitudeDelta: 0.0008,
        }}
      >
        <Marker
          icon={mapMarker}
          calloutAnchor={{
            x: 4.0,
            y: 1.2,
          }}
          coordinate={{
            latitude: -25.7880228,
            longitude: -56.4464809,
          }}
        >
          <Callout tooltip onPress={handleNavigateToOrphanageDetails} >
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Santa Lucia</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>2 orfanato encontrado</Text>

        <RectButton style={styles.createOrphanageButton} onPress={handleNavigateToOrphanageData}>
          <Feather name="plus" size={20} color="#FFF" />
        </RectButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  calloutContainer: {
    width: 160,
    height: 46,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 16,
    justifyContent: 'center',
    elevation: 3,
  },
  calloutText: {
    color: '#0089a5',
    fontSize: 14,
    fontFamily: 'Nunito_700Bold',
  },
  footer: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 32,

    backgroundColor: '#FFF',
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,

    elevation: 3,    //para dar tipo borde sombra

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerText: {
    fontFamily: 'Nunito_700Bold',
    color: '#8fa7b3'
  },
  createOrphanageButton: {
    width: 56,
    height: 56,
    backgroundColor: '#15c3d6',
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center'
  }
});

