import React, { Component } from 'react';
import { View,  StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';

import { filteredPosts } from '../../store/actions/post_actions';

class Segments extends Component {
    state = {
        segments: [
            {
                name: 'All',
                id: 'all'
            },
            {
                name: 'Photos',
                id: 'photoPost'
            },
            {
                name: 'Messages',
                id: 'messagePost'
            }
        ],
        selectedCategory: 'all'
    };

    onSelect(category) {
        this.props.filteredPosts(category);
        this.setState(prevState => {
            return {
                ...prevState,
                selectedCategory: category
            }
        });
    }

    generateSegments() {
        return this.state.segments.map(item => (
            <TouchableWithoutFeedback
                key={item.name}
                onPress={() => this.onSelect(item.id)}
            >
                <View style={[styles.segmentContainer,
                    this.state.selectedCategory === item.id
                    ? styles.active
                : null]}>
                    <Text style={[styles.segment]}>{item.name}</Text>
                </View>
            </TouchableWithoutFeedback>
        ));
    }

    render() {
        return (
            <View style={{
                marginVertical: 10,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                height: 40,
            }}>
                {this.generateSegments()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    segmentContainer: {
        borderRadius: 15,
        padding: 10,
    },
    segment: {
        fontSize: 14,
        color: 'black',
    },
    active: {
        backgroundColor: '#d9a087'
    }
});


const mapDispatchToProps = dispatch => {
    return {
        filteredPosts: (category) => dispatch(filteredPosts(category))
    }
};

export default connect(null, mapDispatchToProps)(Segments);
