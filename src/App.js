import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import firebase from 'firebase';


class App extends Component {
    componentWillMount(){

        const config = {
            apiKey: "AIzaSyAOdFrdSlYTzIIKfbMj1k_45xrbCzqlBG8",
            authDomain: "manager-9f69e.firebaseapp.com",
            databaseURL: "https://manager-9f69e.firebaseio.com",
            projectId: "manager-9f69e",
            storageBucket: "manager-9f69e.appspot.com",
            messagingSenderId: "561222168997"
        };

        firebase.initializeApp(config);

    }

    render(){
        return(
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        Hello !
                    </Text>
                </View>
            </Provider>
        );
    }
}

export default App; 