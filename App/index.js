import React, {Component} from 'react';
import {AppRegistry, StatusBar} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Login from './screens/Login';

const SimpleApp = StackNavigator({
 Intro: {screen: Login}
 });

export default class App extends Component<{}> {
    componentDidMount() {
        StatusBar.setHidden(true);
    }

    render() {
        return (
            <SimpleApp/>
        );
    }
}

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
