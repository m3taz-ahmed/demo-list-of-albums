import React from 'react';
import { Text, View, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity, Linking } from 'react-native';

export const MyAlbum = ({ arrayOfData }) => {

  _keyExtractor = (item, index) => item.title;

  return (
    <FlatList
      data={arrayOfData}
      renderItem={({ item }) =>
        <View style={styles.album}>
          <View style={styles.albumDetails}>
            <View style={styles.thumbnailsContainer}>
              <Image source={{ uri: item.thumbnail_image }} style={styles.thumbnails} />
            </View>
            <View style={styles.albumHeader}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.artist}>{item.artist}</Text>
            </View>
          </View>
          <View style={styles.image}>
            <Image source={{ uri: item.image }} style={styles.myImage} />
          </View>
          <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(item.url)}>
            <View>
              <Text style={styles.buyNow}>Buy Now</Text>
            </View>
          </TouchableOpacity>
        </View>
      }
      keyExtractor={this._keyExtractor}
    />
  );
};

const styles = StyleSheet.create({
  album: {
    margin: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  artist: {
    fontSize: 14,
    fontWeight: '600',
  },
  button: {
    flex: 1,
    padding: 15,
    fontSize: 16,
    fontWeight: '600',
    color: '#23eae6',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#23eae6',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  image: {
    flex: 1,
    flexDirection: 'row',
    borderColor: '#dedede',
    borderWidth: 1,
    alignContent: 'center',
  },
  albumDetails: {
    flex: 2,
    padding: 3,
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderColor: '#dedede',
    borderWidth: 1
  },
  thumbnailsContainer: {
    width: 50, height: 50
  },
  thumbnails: {
    width: 45,
    height: 45
  },
  albumHeader: {
    paddingLeft: 10,
    width: 200,
    height: 50
  },
  myImage: {
    width: Dimensions.get('window').width * 0.94,
    height: 300
  },
  buyNow: {
    textAlignVertical: 'center',
    textAlign: 'center'
  }
});