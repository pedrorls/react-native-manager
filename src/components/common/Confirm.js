import React from 'react';
import {View, Text, Modal, Stylesheet} from 'react-native';
import {CardSection} from './CardSection';
import {Button} from './Button';

const ConfirmModal = ({children, onAccept, onDecline, visible}) => {
    const {cardSectionStyle, textStyle, containerStyle} = this.styles
    return (
        <Modal
            visible={visible}
            transparent
            animationType='slide'
            onRequestClose={() => {}}
        >
            <View style={containerStyle}>
                <CardSection style={cardSectionStyle}>
                    <Text style={textStyle}>{children}</Text>
                </CardSection>
                <CardSection style={cardSectionStyle}>
                    <Button onPress={onAccept}>Yes</Button>
                    <Button onPress={onDecline}>No</Button>
                </CardSection>
            </View>
        </Modal>
    );
}

const styles = Stylesheet.create({
    cardSectionStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
});

export {ConfirmModal};