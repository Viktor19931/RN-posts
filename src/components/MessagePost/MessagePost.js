import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

import like from '../../assets/icons8-heart-40.png';
import comment from '../../assets/icons8-chat-bubble-50.png';
import AsyncImage from "../AsyncImage/AsyncImage";


class MessagePost extends Component {
    render() {
        const { userName, imageURL, message, commentsCount } = this.props.posts;
        return (
            <View style={{flex: 1, padding: 10, borderBottomWidth: 1, borderColor: '#8d8d8d'}}>
                <View style={{flexDirection: 'row', flex: 1}}>
                    <View style={{flex:1, alignItems: 'center'}}>
                        <AsyncImage
                            source={{uri: imageURL}}
                            style={{width: 60, height:  60, borderRadius: 30, margin: 'auto'}}
                        />
                    </View>
                    <View style={{flexDirection: 'column', flex: 3}}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text>{userName}</Text>
                            <Text>May 5, 17:00</Text>
                        </View>
                        <View style={{marginTop: 10}}>
                            <Text>{message}</Text>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Image
                        source={comment}
                        style={{width: 15, height: 15, marginRight: 5}}
                    />
                    <Text>{commentsCount}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5
    },
    imageView: {

    },
    image: {

    }
});

export default MessagePost;
