import React, { Component } from 'react';
import { Text, View, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity, Linking } from 'react-native';
import { navigate } from '../utils'



export default class MyList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // console.log('test ', this.props.navigation);
        return (
            <FlatList
                data={this.props.arrayOfData}
                renderItem={({ item }) =>
                    <View style={styles.album}>
                        <TouchableOpacity style={styles.button} onPress={() => {
                            this.props.navigation.navigate('Details', {
                                url: item.url,
                                thumbnail_image: item.thumbnail_image,
                                title: item.title,
                                artist: item.artist,
                                image: item.image
                            })
                        }} >
                            <View style={styles.albumDetails}>
                                <View style={styles.thumbnailsContainer}>
                                    <Image source={{ uri: item.thumbnail_image }} style={styles.thumbnails} />
                                </View>
                                <View style={styles.albumHeader}>
                                    <Text style={styles.title}>{item.title}</Text>
                                    <Text style={styles.artist}>{item.artist}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                }
                keyExtractor={(item) => item.url}
            />
        )

    }
}


// export const MyList = ({ arrayOfData }) => {

//   _keyExtractor = (item, index) => item.title;

//   return (
//     <FlatList
//       data={arrayOfData}
//       renderItem={({ item }) =>
//         <View style={styles.album}>
//         <TouchableOpacity style={styles.button} onPress={() => {
//               this.props.navigation.navigate('Details'
//             //   , {
//             //     url: item.url,
//             //     thumbnail_image: item.thumbnail_image,
//             //     title: item.title,
//             //     artist: item.artist,
//             //     image: item.image
//             //   })
//               )
//             }} >
//         {/* onPress={() => Linking.openURL(item.url)}> */}
//            <View style={styles.albumDetails}>
//             <View style={styles.thumbnailsContainer}>
//               <Image source={{ uri: item.thumbnail_image }} style={styles.thumbnails} />
//             </View>
//             <View style={styles.albumHeader}>
//               <Text style={styles.title}>{item.title}</Text>
//               <Text style={styles.artist}>{item.artist}</Text>
//             </View>
//           </View> 
//           </TouchableOpacity>
//         </View>
//       }
//       keyExtractor={this._keyExtractor}
//     />
//   ); 
// };

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