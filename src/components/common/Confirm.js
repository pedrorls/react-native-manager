import React from 'react';
import {View, Text, Modal, Stylesheet} from 'react-native';
import {CardSection} from './CardSection';
import {Button} from './Button';

const ConfirmModal = ({children, onAccept, onDecline}) => {
    return (
        <Modal>
            <View>
                <CardSection>
                    <Text>{children}</Text>
                </CardSection>
                <CardSection>
                    <Button onPress={onAccept}>Yes</Button>
                    <Button onPress={onDecline}>No</Button>
                </CardSection>
            </View>
        </Modal>
    );
}

export {ConfirmModal};