import React, {Component} from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

import like from '../../assets/icons8-heart-40.png';
import comment from '../../assets/icons8-chat-bubble-50.png';
import AsyncImage from "../AsyncImage/AsyncImage";
// import {CachedImage,} from "react-native-cached-image";

class PhotoPost extends Component {
    render() {
        const { userName, imageURL, likesCount, commentsCount } = this.props.posts;
        return (
            <View style={{borderBottomWidth: 1, borderColor: '#8d8d8d'}}>
                <View style={{height: 40, flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontSize: 22, fontWeight: 'bold'}}>{userName}</Text>
                </View>
                <View>
                    <AsyncImage
                        source={{uri: imageURL}}
                        style={{width: Dimensions.get('window').width, height: 320}}
                    />
                </View>
                <View style={{padding: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{flexDirection: 'row', flex: 1}}>
                        <Image
                            source={like}
                            style={{width: 15, height: 15, marginRight: 5}}
                        />
                        <Text>{likesCount}</Text>
                    </View>
                    <View style={{flexDirection: 'row', flex: 1, justifyContent: 'center'}}>
                        <Image
                            source={comment}
                            style={{width: 15, height: 15, marginRight: 5}}
                        />
                        <Text>{commentsCount}</Text>
                    </View>
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                        <Text>May 5, 17:00</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default PhotoPost;
