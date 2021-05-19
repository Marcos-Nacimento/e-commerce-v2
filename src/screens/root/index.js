import React, { useState, useEffect, useCallback } from 'react';
import 
{ 
    Container,
    ContentScrollView,
    DotBanner,
    ContainerDot,
    Label,
    ContainerOffers,
    Scroll,
    Image,
    FlatList,
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { api } from '../../api';
import { heightPercentageToDP as hP } from 'react-native-responsive-screen';
import { useTheme } from 'react-native-paper';

import Loading from '../../components/loading';
import ProductItem from '../../components/product';

const Root = () => {
    const section = [
        {
            title: 'Açougue',
            img: require('../../assets/carne.png'),
            parameter: 'açougue',
        },
        {
            title: 'Bebidas',
            img: require('../../assets/drinks.png'),
            parameter: 'bebidas',
        },
        {
            title: 'Congelados',
            img: require('../../assets/congelado.png'),
            parameter: 'congelados',
        },
        {
            title: 'Padaria',
            img: require('../../assets/padaria.png'),
            parameter: 'padaria',
        },
        {
            title: 'Limpeza',
            img: require('../../assets/limpesa.png'),
            parameter: 'limpeza'
        },
        {
            title: 'Doces',
            img: require('../../assets/doce.png'),
            parameter: 'doces',
        },
        {
            title: 'Mercearia',
            img: require('../../assets/mercearia.png'),
            parameter: 'mercearia',
        },
    ];
    const [offers, setOffers] = useState([]);
    const [loaded, setLoaded] = useState(true);
    const [page, setPage] = useState(1);
    const [xTotalPage, setTotal] = useState(1);

    const navigation = useNavigation();
    const { colors } = useTheme();

    const getOffers = async () => {
        if(page > xTotalPage) {
            return;
        };

        try {
            const { data } = await api.get(`${api.defaults.baseURL}/product/list/${page}/oferta`);

            setOffers([...offers, ...data.docs]);
            setTotal(data.totalPages);
            setPage(data.page + 1);
        }catch(error) {
            console.log(error);
        }finally {
            setLoaded(false);
        };
    };

    useEffect(() => {
        setTimeout(() => {
            getOffers();
        }, 2000);
    }, []);
    
    const keyExtractor = useCallback(key => key._id, []);

    const renderItem = useCallback(({item}) => (
        <ProductItem item={item}/>
    ), []);

    return( 
        <Container>
            <Scroll
                showsVerticalScrollIndicator={false}
            >
                <Label
                    style={{
                        left: hP('2%'),
                        marginTop: hP('5%'),
                        fontFamily: 'Nunito_600SemiBold',
                    }}
                >
                    CATEGORIAS
                </Label>

                <ContentScrollView>
                    <Scroll 
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={true}
                    >
                        {section.map((item, index) => (
                            <ContainerDot key={index}>
                                <DotBanner onPress={() => navigation.navigate('product', {name: item.parameter})}>
                                    <Image
                                        source={item.img}
                                        resizeMode="contain"
                                    />
                                </DotBanner>
                                <Label>
                                    {item.title}
                                </Label>
                            </ContainerDot>
                        )) }
                    </Scroll>
                </ContentScrollView>
                <Label
                    style={{
                        left: hP('2%'),
                        marginTop: hP('3%'),
                        fontFamily: 'Nunito_600SemiBold'
                    }}
                >
                    OFERTAS DO DIA
                </Label>

                <ContainerOffers>
                    <FlatList 
                        data={offers}
                        keyExtractor={keyExtractor}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={true}
                        renderItem={renderItem}
                        horizontal={true}
                        onEndReachedThreshold={0.1}
                        onEndReached={getOffers}
                    />
                </ContainerOffers>
            </Scroll>

            {loaded && (
                <Loading />
            )}
        </Container>
    );
};


export default Root;