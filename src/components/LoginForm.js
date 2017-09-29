import React, {Component} from 'react';
import {Text, Alert} from 'react-native';
import {connect} from 'react-redux';
import {Card, CardSection, Input, Button} from './common';
import {
    emailChanged,
    passwordChanged,
    loginUser
} from '../actions';


class LoginForm extends Component{
    onEmailChange(text){
        this.props.emailChanged(text);
    }

    onPasswordChange(text){
        this.props.passwordChanged(text);
    }

    onButtonPress(){
        const {email, password} = this.props;
        this.props.loginUser({email, password});
    }
    
    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                    label="Email"
                    placeholder="email@example.com"
                    onChangeText={this.onEmailChange.bind(this)}
                    value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>
                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Login
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = ({auth}) => {
    const {email, password, error} = auth;
    return {email, password, error};
};

export default connect(
    mapStateToProps,
    {
        emailChanged,
        passwordChanged,
        loginUser
    }
)(LoginForm);

const styles = {
    errorTextStyle: {
        fontSize: 18,
        alignSelf: 'center',
        color: 'red'
    }
}