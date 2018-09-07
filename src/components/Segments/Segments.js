import React, { Component } from 'react';
import { View,  StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';

import { selectSegment } from '../../store/actions/post_actions';

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
        ]
    };

    onSelect(category) {
        this.props.selectSegment(category);
    }

    generateSegments() {
        return this.state.segments.map(item => (
            <TouchableWithoutFeedback
                key={item.name}
                onPress={() => this.onSelect(item.id)}
            >
                <View style={styles.segmentContainer}>
                    <Text style={styles.segment}>{item.name}</Text>
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
                backgroundColor: '#68ffca'
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
        backgroundColor: 'green',
    },
    segment: {
        fontSize: 14,
        padding: 10,
        color: 'black',
        backgroundColor: 'yellow'
    }
});

const mapDispatchToProps = dispatch => {
    return {
        selectSegment: (category) => dispatch(selectSegment(category))
    }
};

export default connect(null, mapDispatchToProps)(Segments);
