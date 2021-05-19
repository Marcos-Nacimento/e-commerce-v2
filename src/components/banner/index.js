import React, { useState, useRef } from 'react';
import 
{ 
    Container,
    Header,
    Title,
} from './styles';
import { useTheme, Divider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Animated } from 'react-native';
import 
{ 
    widthPercentageToDP as wP,
    heightPercentageToDP as hP,
} from 'react-native-responsive-screen';

export default ({...props}) => {
    const { colors } = useTheme();
    const [show, setShow] = useState(false);

    const heightAnim = useRef(new Animated.Value(hP('40%'))).current;

    const startingAnimtion = () => {
        setShow(!show);

        Animated.spring(heightAnim, {
            toValue: hP('8%'),
            useNativeDriver: false,
        }).start();
    };

    const stopingAnimation = () => {
        setShow(!show);

        Animated.spring(heightAnim, {
            toValue: hP('40%'),
            useNativeDriver: false,
        }).start();
    };

    return(
        <Container 
            bg={colors.primary}
            as={Animated.View}
            style={{
                height: heightAnim
            }}
        >
            <Header>
                <Title>{props.title}</Title>
                <MaterialCommunityIcons 
                    name={show ? 'arrow-right' : 'arrow-down'}
                    color='#FFFFFF'
                    size={hP('3%')}
                    onPress={() => show ? stopingAnimation() : startingAnimtion()} 
                />
            </Header>
            <Divider style={{backgroundColor: '#FFF'}}/>
        </Container>
    );
};
