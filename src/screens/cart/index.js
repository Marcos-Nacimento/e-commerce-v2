import React, { useState } from 'react';
import 
{
    Container,
    ContainerEmptyCart,
    Image,
    Label,
    Title,
    ContainerSubTitle,
    ButtonContainerGoBack,
    ButtonName,
    Header,
    TitleHeader,
    ContainerButtonFooter,
    ButtonFooter,
    ContainerProduct,
    Scroll,
    ImageProduct,
    ContentRightProduct,
    NameProduct,
    Price,
    Actions,
    ButtonAction,
    Amount,
    ContainerMainProduct,
    ContainerTotalPrice,
    TotalPrice,
    ButtonDeleteAllItems,
    NameButtonDelete,
    MenuContentFooter,
    MenuFooter,
    MenuContentRight,
    MenuContentLeft,
    LabelMenu,
    LabelMenuTotal,
} from './styles';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { Divider } from 'react-native-paper';
import { Alert, ActivityIndicator } from 'react-native';
import { heightPercentageToDP as hP, widthPercentageToDP as wP } from 'react-native-responsive-screen';
import { useTheme } from 'react-native-paper';

import addToCartAction from '../../actions/addToCartAction';
import removeFromCartAction from '../../actions/removeFromCartAction';
import clearCartAction from '../../actions/clearCartAction';
import * as Linking from 'expo-linking';
import * as Contacts from 'expo-contacts';

const Cart = ({ add, remove, cart, clean }) => {
    const navigation = useNavigation();
    const [loaded, setLoaded] = useState(false);
    const { colors } = useTheme();
    
    const calculatedPrices = () => {
        let items = Object.values(cart);
        let totalPrice = 0;

        for(let i=0; i < items.length; ++i) {
            totalPrice += items[i].price * items[i].quantity;
        };

        return totalPrice.toFixed(2);
    };

    const cleanAllItems = () => {
        Alert.alert('Aviso!', 
        'Ao fazer isso, seu carrinho ficará vazio e você terá que escolher os produtos novamente.',
            [
                {
                    text: 'cancelar',
                    onPress: () => {}
                }, 
                {
                    text: 'ok',
                    onPress: () => clean(),
                    style: 'cancel',
                },
            ]
        );
    };

    const onLinking = async () => {
        setLoaded(true);

        let msg = '';
        Object.values(cart).map(item => {
            msg = msg += item.name + ' quantidade: ' + item.quantity + '\n \n';
        });

        try {
            await Linking.openURL(`https://wa.me/phone=+5511965809328?text=${'LISTA DE COMPRAS' + '\n \n' + msg}`);
        }catch(error) {
            console.log(error);
        }finally {
            setLoaded(false);
        };
    };

    const writeContact = async () => {
        try {
            let { status } = await Contacts.requestPermissionsAsync();

            if(status === 'granted') {
                await Contacts.addContactAsync({
                    name: 'SUPERMERCADO SORRISO',
                    phoneNumbers: [{number: '44998197450'}]
                });

                onLinking();
            };
        }catch(error) {
            console.log(error);
        };
    };

    const readContacts = async () => {
        try {
            let { status } = await Contacts.requestPermissionsAsync();
            
            if(status === 'granted') {
                let { data } = await Contacts.getContactsAsync({
                    fields: Contacts.Fields.PhoneNumbers,
                });
                
                let contactTarget = data.filter(contact => contact.phoneNumbers[0].number === '44998252522');

                if(contactTarget.length) {
                    onLinking();
                    return;  
                };

                writeContact();
            };

        }catch(error) {
            console.log(error)
        };
    };

    if(Object.values(cart).length === 0) {
        return(
            <>
                <Header
                   bg={colors.primary}
                >
                    <TitleHeader>Meu carrinho</TitleHeader>
                    <MaterialCommunityIcons name='cart-outline' color='#FFFFFF' size={hP('3%')}/>
                </Header>
                <ContainerEmptyCart>
                    <Title>
                        Seu carrinho está vazio !
                    </Title>
                    <Image 
                        source={require('../../assets/cart.png')}
                        resizeMode='contain'
                    />
                    <ContainerSubTitle>
                        <Label>
                            Que tal dar uma olhada em nossas
                            sugestões? Se preferir, volte pra
                            página inicial e busque mais produtos.
                        </Label>
                    </ContainerSubTitle>
                    <ButtonContainerGoBack 
                        onPress={() => navigation.navigate('root')}
                        bg={colors.primary}
                    >
                        <ButtonName>
                            Voltar para a página inicial
                        </ButtonName>
                    </ButtonContainerGoBack>
                </ContainerEmptyCart>
            </>
        );
    };
    
    return(
        <Container>
            <Header
                bg={colors.primary}
            >
                <TitleHeader>Meu carrinho</TitleHeader>
                <ContainerTotalPrice>
                    <MaterialCommunityIcons name='cart-outline' color='#FFFFFF' size={hP('3%')}/>
                    <TotalPrice>R${calculatedPrices()}</TotalPrice>
                </ContainerTotalPrice>
            </Header>

            <Scroll
                contentContainerStyle={{
                    alignItems: 'center',
                }}
                showsVerticalScrollIndicator={false}
            >
                {Object.values(cart).map((item) => (
                    <ContainerMainProduct key={item._id}>
                        <ContainerProduct>
                            <ImageProduct 
                                source={{uri: item.image}}
                                resizeMode='contain'
                            />
                            <ContentRightProduct>
                                <NameProduct
                                    numberOfLines={2}
                                    ellipsizeMode='tail'
                                >
                                    {item.name}
                                </NameProduct>
                                <Price
                                    bg={colors.primary}
                                >
                                    R${item.price}
                                </Price>
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
                            </ContentRightProduct>
                        </ContainerProduct>
                        <Divider 
                            style={{
                                width: wP('85%'),
                                backgroundColor: '#dcdcdc'
                            }}
                        />
                    </ContainerMainProduct>
                ))}
                <MenuFooter>
                    <ButtonDeleteAllItems onPress={() => cleanAllItems()}>
                        <AntDesign name='delete' color='#808080' size={hP('3%')}/>
                        <NameButtonDelete>
                            Excluir todos os produtos
                        </NameButtonDelete>
                    </ButtonDeleteAllItems>
                    <MenuContentFooter>
                        <MenuContentLeft>
                            <LabelMenu>
                                SubTotal
                            </LabelMenu>
                            <LabelMenu>
                                Descontos
                            </LabelMenu>
                            <LabelMenuTotal>
                                Total
                            </LabelMenuTotal>
                        </MenuContentLeft>
                        <MenuContentRight>
                            <LabelMenu>
                                R${calculatedPrices()}
                            </LabelMenu>
                            <LabelMenu>
                                R$0.00
                            </LabelMenu>
                            <LabelMenuTotal>
                                R${calculatedPrices()}
                            </LabelMenuTotal>
                        </MenuContentRight>
                    </MenuContentFooter>
                </MenuFooter>
            </Scroll>
    
            <ContainerButtonFooter>
                {loaded ? (
                    <ActivityIndicator color='#FFFF'/>
                ): (
                    <ButtonFooter 
                        onPress={() => readContacts()}
                        bg={colors.primary}
                    >
                        <ButtonName>continue</ButtonName>
                    </ButtonFooter>
                )}
            </ContainerButtonFooter>
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
        clean: () => dispatch(clearCartAction()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);