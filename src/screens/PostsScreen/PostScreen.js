import React, {Component} from 'react';
import {connect} from "react-redux";
import {FlatList, Image, SafeAreaView, ScrollView, StyleSheet, TouchableWithoutFeedback} from 'react-native';

import {dispatchPosts} from "../../store/actions/post_actions";
import MessagePost from "../../components/MessagePost/MessagePost";
import PhotoPost from "../../components/PhotoPost/PhotoPost";
import menu from '../../assets/icons8-menu-24.png'
import {navigatorDrawer} from "../../utility/misc";
import Segments from "../../components/Segments/Segments";

class PostScreen extends Component {
    constructor(props) {
        super(props);

        this.props.navigator.setOnNavigatorEvent((event) => {
            navigatorDrawer(event, this)
        });
    }

    static navigatorButtons = {
        rightButtons: [
            {
                title: 'Settings',
                buttonColor: 'blue',
                buttonFontSize: 16,
            }

        ],
        leftButtons: [
            {
                icon: menu,
                id: 'DrawerButton'
            }
        ]
    };
    renderPost = ({item, index}) => {
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
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
                <Segments />
                <ScrollView style={styles.container}>
                    <FlatList
                        data={this.props.posts}
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
