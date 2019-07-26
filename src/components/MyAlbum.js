import React , {Component} from 'react';
import { Text, View, Image, StyleSheet, Dimensions, TouchableOpacity, Linking } from 'react-native';



export default class MyAlbum extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log('MyAlbum ', styles);
    return (
      <View style={{ flex:1,}}>
      <View style={styles.container}>
        <View style={styles.uppercontainer}>
          <View style={styles.thumbnailscontainer}>
            <Image style={styles.thumbnails} source={{ uri: this.props.navigation.getParam('thumbnail_image') }}  />
          </View>
          <View style={styles.albumHeader}>
            <Text style={styles.title}>{this.props.navigation.getParam('title')}</Text>
            <Text style={styles.artist}>{this.props.navigation.getParam('artist')}</Text>
          </View>
        </View>
        <View style={styles.lowercontainer}>
          <Image  style={styles.image} source={{ uri: this.props.navigation.getParam('image') }} />
          <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(this.props.navigation.getParam('url'))}>
            <View>
              <Text style={styles.buyNow}>Buy Now</Text>
            </View>
          </TouchableOpacity>
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
    backgroundColor: '#333',
    justifyContent: 'flex-start'
  },
  uppercontainer : {
    flex: 2,
    alignItems: 'stretch',
    flexDirection: 'column',
    margin: 10,
    justifyContent: 'flex-start',
  },
  lowercontainer: {
    flex: 4,
    flexDirection: 'column',
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
    height : Dimensions.get('window').height * 0.5,
  },
  button: {
    flex: 1,
    alignItems: 'stretch',
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
  buyNow: {

  }
  // album: {
  //   flex: 1,
  //   margin: 10,
  // },
  // title: {
  //   fontSize: 16,
  //   fontWeight: '600',
  // },
  // artist: {
  //   fontSize: 14,
  //   fontWeight: '600',
  // },
  // button: {
  //   flex: 1,
  //   padding: 15,
  //   fontSize: 16,
  //   fontWeight: '600',
  //   color: '#23eae6',
  //   borderRadius: 4,
  //   borderWidth: 1,
  //   borderColor: '#23eae6',
  //   textAlignVertical: 'center',
  //   textAlign: 'center',
  // },
  // image: {
  //   flex: 3,
  //   borderColor: '#dedede',
  //   borderWidth: 1,
  //   alignContent: 'center',
  // },
  // albumDetails: {
  //   flex: 1,
  //   padding: 3,
  //   flexDirection: 'row',
  //   alignItems: 'flex-start',
  //   borderColor: '#dedede',
  //   borderWidth: 1
  // },
  // thumbnailsContainer: {
  //   flex: 2,
  //   width: 50, height: 50
  // },
  // thumbnails: {
  //   width: 45,
  //   height: 45
  // },
  // albumHeader: {
  //   paddingLeft: 10,
  //   width: 200,
  //   height: 50,
  //   flex: 4,
  // },
  // myImage: {
  //   width: Dimensions.get('window').width * 0.94,
  //   height: 300
  // },
  // buyNow: {
  //   textAlignVertical: 'center',
  //   textAlign: 'center'
  // }
});