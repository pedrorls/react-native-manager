// IMPORTS
import React from 'react';
import {Text, View} from 'react-native';

// COMPONENT
const Header = (props) => {
    const {textStyle, viewStyle} = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};


const styles = {
    viewStyle:{
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        paddingTop: 10,
        paddingBottom: 10,
        elevation: 4,
        position: 'relative',
    },

    textStyle: {
        color: '#333',
        fontSize: 22,
        fontWeight: '300',
    },
};

// MAKE COMPONENT AVAILABLE
export {Header};