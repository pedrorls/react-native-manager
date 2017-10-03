import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';


const RouterComponent = () => {
    return(
        <Router>
            <Scene key='auth'>
                <Scene key='login' component={LoginForm} title='Login' style={styles.sceneStyle}/>
            </Scene>
            <Scene key='main'>
                <Scene
                    onRight={() => Actions.employeeCreate()}
                    rightTitle='Add' 
                    key='employeesList'
                    component={EmployeeList} 
                    title='Employees'
                    style={styles.sceneStyle}
                    initial
                />
                <Scene
                    key='employeeCreate'
                    component={EmployeeCreate}
                    title='New Employee'
                    style={styles.sceneStyle}
                />
            </Scene>
        </Router>
    );
};

const styles = {
    sceneStyle: {
        paddingTop: 55,
    }
};

export default RouterComponent;