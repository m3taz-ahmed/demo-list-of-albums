import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, Dimensions, TouchableOpacity, Linking } from 'react-native';
import AlbumHeader from './AlbumHeader';
import Btn from './Btn';



export default class MyAlbum extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={styles.container}>
          <View>
            <AlbumHeader
              thumbnail_image={this.props.navigation.getParam('thumbnail_image')}
              title={this.props.navigation.getParam('title')}
              artist={this.props.navigation.getParam('artist')}
            />
          </View>
          <View style={styles.lowercontainer}>
            <Image style={styles.image} source={{ uri: this.props.navigation.getParam('image') }} />
            <Btn
              style={styles.button}
              press={this.props.navigation.getParam('url')}
              btnText='Buy Now'
              type='link'
            />
          </View>
        </View>
      </View>
    );
  };

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  uppercontainer: {
    margin: 10,
    justifyContent: 'flex-start',
    backgroundColor: '#ff94c2'
  },
  lowercontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'

  },
  thumbnailscontainer: {

  },
  thumbnails: {
    width: 45,
    height: 45
  },
  albumHeader: {

  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  artist: {
    fontSize: 14,
    fontWeight: '600',
  },
  image: {
    width: Dimensions.get('window').width * 0.94,
    height: Dimensions.get('window').height * 0.5,
  }
});