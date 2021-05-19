import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, MaterialCommunityIcons, } from '@expo/vector-icons';
import { heightPercentageToDP as hP } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import { useTheme } from 'react-native-paper';

const Tabs = createBottomTabNavigator();

//screens
import Root from '../screens/root';
import Cart from '../screens/cart';
import Help from '../screens/help';

const RootNavigation = ({ cart }) => {
    const { colors } = useTheme();

    const counterItem = () => {
        let items = Object.values(cart);
        let counter = 0;

        for(let i = 0 ; i < items.length; i++) {
            counter = counter += items[i].quantity;
        };

        return counter;
    };

    return(
        <Tabs.Navigator
            tabBarOptions={{
                style: {
                    margin: hP('2%'),
                    borderRadius: hP('2%'),
                },
                labelStyle: {
                    fontFamily: 'Nunito_600SemiBold',
                    fontSize: hP('2%')
                },
                activeTintColor: colors.primary
            }}
        >
            <Tabs.Screen 
                name="root"
                component={Root}
                options={{
                    tabBarIcon: ({size, color}) => <AntDesign name='home' size={size} color={color}/>,
                    tabBarLabel: 'Início',
                }}
            />
            <Tabs.Screen 
                name="cart"
                component={Cart}
                options={{
                    tabBarIcon: ({size, color}) => <MaterialCommunityIcons name='cart-plus' size={size} color={color}/>,
                    tabBarLabel: 'Carrinho',
                    tabBarBadge: counterItem(),
                }}
            />
            <Tabs.Screen 
                name="help"
                component={Help}
                options={{
                    tabBarIcon: ({size, color}) => <MaterialCommunityIcons name='help-circle-outline' size={size} color={color}/>,
                    tabBarLabel: 'Ajuda',
                }}
            />
        </Tabs.Navigator>
    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    };
};

export default connect(mapStateToProps)(RootNavigation);