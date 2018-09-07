import React, {Component} from 'react';
import {
    FlatList,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Image
} from 'react-native';
import {connect} from "react-redux";

import {dispatchPosts} from "../../store/actions/post_actions";
import MessagePost from "../../components/MessagePost/MessagePost";
import PhotoPost from "../../components/PhotoPost/PhotoPost";
import posts from '../../../posts'

import like from '../../assets/icons8-heart-40.png';
import comment from '../../assets/icons8-chat-bubble-50.png';

class PostScreen extends Component {
    renderPost = ({item, index}) => {
        // console.log(item.likesCount != null);
        if (item.type === "photoPost") {
            return (
                <PhotoPost posts={item}/>
            );
        } else {
            return (
                <MessagePost posts={item}/>
            );
        }
    };

    componentDidMount() {
        this.props.dispatchPosts();
        setTimeout(() => {
            console.log(this.props.posts);
            }, 2312
        )
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <ScrollView style={styles.container}>
                    <FlatList
                        data={posts}
                        renderItem={this.renderPost}
                        keyExtractor={(item, index) => item.identifier.toString()}
                    />
                </ScrollView>
            </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const mapStateToProps = state => {
    return {
        posts: state.statePosts.posts
    };
};

const mapDispatchToProps = dispatch => {
    return {
        dispatchPosts: () => dispatch(dispatchPosts())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostScreen);
