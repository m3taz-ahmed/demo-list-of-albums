
import React from 'react';
import { Text, View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

// export const AlbumHeader = ({ url, thumbnail_image, title, artist, image }) => (

export default class AlbumHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('AlbumHeader ', this.props)
        const{
            thumbnail_image,
            title,
            artist,
        } = this.props
        return (
            <View style={styles.album}>
                    <View style={styles.albumDetails}>
                        <View style={styles.thumbnailsContainer}>
                            <Image source={{ uri: thumbnail_image }} style={styles.thumbnails} />
                        </View>
                        <View style={styles.albumHeader}>
                            <Text style={styles.title}>{title}</Text>
                            <Text style={styles.artist}>{artist}</Text>
                        </View>
                    </View>
            </View>
        )
    }
};


const styles = StyleSheet.create({
    album: {
        // flex: 1,
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
    albumDetails: {
     //   flex: 2,
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
});


