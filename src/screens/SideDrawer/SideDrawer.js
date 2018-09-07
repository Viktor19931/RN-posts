import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

class SideDrawer extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text>SideDrawer created !</Text>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default SideDrawer;
