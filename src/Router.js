import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';

const RouterComponent = () => {
    return(
        <Router style={styles.sceneStyle}>
            <Scene 
                key='login'
                component={LoginForm}
                title='Login'
                initial
            />
            <Scene
                key='employeelist'
                component={EmployeeList}
                title='Employees'
            />
        </Router>
    );
};

const styles = {
    sceneStyle: {
        paddingTop: 55,
    }
};

export default RouterComponent;