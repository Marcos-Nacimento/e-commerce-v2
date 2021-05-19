import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import RootNavigation from './rootNavigation';

const Stack = createStackNavigator();

// screens
import Product from '../screens/product';

export default () => {
    return(
        <Stack.Navigator
            screenOptions={{
                cardStyle: {
                    backgroundColor: '#FFFF',
                },
                headerTransparent: true,
                headerTitleStyle: {
                    fontFamily: 'Nunito_300Light',
                    color: '#808080'
                },
                headerTintColor: '#808080',
            }}
            mode="card"
        >
            <Stack.Screen 
                name='root' 
                component={RootNavigation}
                options={{
                    headerShown: false,   
                }}
            />
            <Stack.Screen 
                name='product'
                component={Product}
                options={{
                    headerTitle: 'Comprar',
                }}
            />
        </Stack.Navigator>
    );
};