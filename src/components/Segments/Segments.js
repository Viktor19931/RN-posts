import React, { Component } from 'react';
import { View,  StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';

class Segments extends Component {
    state = {
        segments: ['All', 'Photos', 'Messages']
    };

    onSelect(f) {
        console.log(f);
    }

    generateSegments() {
        return this.state.segments.map(item => (
            <TouchableWithoutFeedback onPress={() => this.onSelect(item)}>
                <View style={styles.segmentContainer}>
                    <Text style={styles.segment}>{item}</Text>
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

export default Segments;
