/**
 * Created by xiaolv on 18/6/20.
 */
import React from 'react';
import {Text}  from'react-native';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';
import Nav from './navigation/index';

const store = configureStore();

const Root = () => (
    <Provider store={store}>
        <Nav />
    </Provider>
);

export default Root;