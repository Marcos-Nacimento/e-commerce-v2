import React, { memo } from 'react';
import 
{
    Container,
    Label,
    Price,
    Image,
    Amount,
    Actions,
    NameButton,
    ButtonAction,
    ButtonContainer,
} from './styles';
import { connect } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { heightPercentageToDP as hP } from 'react-native-responsive-screen';
import { useTheme } from 'react-native-paper';

import addToCartAction from '../../actions/addToCartAction';
import removeFromCartAction from '../../actions/removeFromCartAction';

const Product = ({ cart, add, remove, item }) => {
    const { colors } = useTheme();
    return(
        <Container>
            <Image 
                source={{uri: item.image}}
                resizeMode='contain'
            />
            <Label
                numberOfLines={2}
                ellipsizeMode='tail'
            >
                {item.name}
            </Label>
            <Price color={colors.primary}>R${item.price}</Price>
            {cart[item._id] ? (
                <Actions>
                    <ButtonAction onPress={() => remove(item)}>
                        <MaterialCommunityIcons name='minus' size={hP('3%')} color='#808080'/>
                    </ButtonAction>
                    <Amount>
                        {cart[item._id].quantity}
                    </Amount>
                    <ButtonAction onPress={() => add(item)}>
                        <MaterialCommunityIcons name='plus' size={hP('3%')} color='#808080'/>
                    </ButtonAction>
                </Actions>
            ): (
                <ButtonContainer 
                    onPress={() => add(item)}
                    bg={colors.primary}    
                >
                    <NameButton>vou levar</NameButton>
                </ButtonContainer>
            )}
        </Container>
    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        add: payload => dispatch(addToCartAction(payload)),
        remove: payload => dispatch(removeFromCartAction(payload)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(Product))