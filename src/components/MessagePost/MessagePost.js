import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';

import comment from '../../assets/icons8-chat-bubble-50.png';
import { CachedImage } from 'react-native-cached-image';

class MessagePost extends Component {
    render() {
        const { userName, imageURL, message, commentsCount } = this.props.posts;
        const { mainWrapper, avatarContainer, content, contentHeader, icoStyle, imageStyle, commentWrapper} = styles;
        return (
            <View style={mainWrapper}>
                <View style={avatarContainer}>
                    <View style={avatarContainer}>
                        <CachedImage
                            source={{uri: imageURL}}
                            style={imageStyle}
                        />
                    </View>
                    <View style={content}>
                        <View style={contentHeader}>
                            <Text>{userName}</Text>
                            <Text>May 5, 17:00</Text>
                        </View>
                        <View style={{marginTop: 10}}>
                            <Text>{message}</Text>
                        </View>
                    </View>
                </View>
                <View style={commentWrapper}>
                    <Image
                        source={comment}
                        style={icoStyle}
                    />
                    <Text>{commentsCount}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainWrapper: {
        flex: 1,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#8d8d8d'
    },
    avatarContainer: {
        flexDirection: 'row',
        flex: 1
    },
    imageStyle: {
        width: 60,
        height:  60,
        borderRadius: 30,
        margin: 'auto'},
    content: {
        flexDirection: 'column',
        flex: 3},
    contentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    commentWrapper: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    icoStyle: {
        width: 15,
        height: 15,
        marginRight: 5
    }
});

export default MessagePost;
