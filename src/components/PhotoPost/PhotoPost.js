import React, {Component} from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

import like from '../../assets/icons8-heart-40.png';
import comment from '../../assets/icons8-chat-bubble-50.png';
import { CachedImage } from "react-native-cached-image";

class PhotoPost extends Component {
    render() {
        const { userName, imageURL, likesCount, commentsCount } = this.props.posts;
        const { mainContainer, avatarContainer, image, nameStyle, contentContainer, icoStyle, icoWrap } = styles;
        return (
            <View style={mainContainer}>
                <View style={avatarContainer}>
                    <Text style={nameStyle}>{userName}</Text>
                </View>
                <View>
                    <CachedImage
                        source={{uri: imageURL}}
                        style={image}
                    />
                </View>
                <View style={contentContainer}>
                    <View style={icoWrap}>
                        <Image
                            source={like}
                            style={icoStyle}
                        />
                        <Text>{likesCount}</Text>
                    </View>
                    <View style={[icoWrap, {justifyContent: 'center'}]}>
                        <Image
                            source={comment}
                            style={icoStyle}
                        />
                        <Text>{commentsCount}</Text>
                    </View>
                    <View style={[{alignItems: 'flex-end'}]}>
                        <Text style={{alignSelf: 'flex-end'}}>May 5, 17:00</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        borderBottomWidth: 1,
        borderColor: '#8d8d8d'
    },
    avatarContainer: {
        height: 40,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: Dimensions.get('window').width,
        height: 320
    },
    nameStyle: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    contentContainer: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    icoStyle: {
        width: 15,
        height: 15,
        marginRight: 5
    },
    icoWrap: {
        flexDirection: 'row',
        flex: 1
    }
});

export default PhotoPost;
