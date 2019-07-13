import React from 'react';
import { Text, View ,FlatList ,Image ,StyleSheet ,Dimensions ,TouchableOpacity ,Linking } from 'react-native';

export const MyAlbum = () => {

    const arrayOfData = [
      {
        title: "Taylor Swift",
        artist: "Taylor Swift",
        url: "https://www.amazon.com/Taylor-Swift/dp/B0014I4KH6",
        image: "https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg",
        thumbnail_image: "https://i.imgur.com/K3KJ3w4h.jpg"
      },
      {
        title: "Fearless",
        artist: "Taylor Swift",
        url: "https://www.amazon.com/Fearless-Enhanced-Taylor-Swift/dp/B001EYGOEM",
        image: "https://images-na.ssl-images-amazon.com/images/I/51qmhXWZBxL.jpg",
        thumbnail_image: "https://i.imgur.com/K3KJ3w4h.jpg"
      },
      {
        title: "Speak Now",
        artist: "Taylor Swift",
        url: "https://www.amazon.com/Speak-Now-Taylor-Swift/dp/B003WTE886",
        image: "https://images-na.ssl-images-amazon.com/images/I/51vlGuX7%2BFL.jpg",
        thumbnail_image: "https://i.imgur.com/K3KJ3w4h.jpg"
      },
      {
        title: "Red",
        artist: "Taylor Swift",
        url: "https://www.amazon.com/Red-Taylor-Swift/dp/B008XNZMOU",
        image: "https://images-na.ssl-images-amazon.com/images/I/41j7-7yboXL.jpg",
        thumbnail_image: "https://i.imgur.com/K3KJ3w4h.jpg"
      },
      {
        title: "1989",
        artist: "Taylor Swift",
        url: "https://www.amazon.com/1989-Taylor-Swift/dp/B00MRHANNI",
        image: "https://images-na.ssl-images-amazon.com/images/I/717DWgRftmL._SX522_.jpg",
        thumbnail_image: "https://i.imgur.com/K3KJ3w4h.jpg"
      }
    ]

    _keyExtractor = (item, index) => item.title;

    return (
        // <View>
            <FlatList
                data={arrayOfData}
                renderItem={({ item }) =>
                  <View style={{
                    margin: 10,
                  }}>
                    <View style={{
                        flex: 2,
                        padding: 3,
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        borderColor: '#dedede',
                        borderWidth: 1
                    }}>
                        <View style={{ width: 50, height: 50 }}>
                            <Image source={{ uri: item.thumbnail_image }} style={{ width: 45, height: 45 }} />
                        </View>
                        <View style={{ paddingLeft: 10, width: 200, height: 50 }}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.artist}>{item.artist}</Text>
                        </View>
                    </View>
                    <View style={styles.image}>
                      <Image source={{ uri: item.image }} style={{ width: Dimensions.get('window').width * 0.94, height: 300 }} />
                    </View>
                    <TouchableOpacity style={styles.button} onPress={ ()=> Linking.openURL(item.url) }>
                      <View>
                        <Text style={{ textAlignVertical: 'center', textAlign: 'center' }}>Buy Now</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                }
                keyExtractor={this._keyExtractor}

            />
        // </View>
    );
};

const styles = StyleSheet.create({
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
    alignContent:'center',
  },
});