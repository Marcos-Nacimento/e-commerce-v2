import React, { useEffect, useState, useCallback } from 'react';
import 
{ 
    Container, 
    ContainerSearch,
    ContainerNotFound,
    Image,
    Label,
    ContentMain,
} from './styles';
import { api } from '../../api';
import { Searchbar } from 'react-native-paper';
import { heightPercentageToDP as hP, widthPercentageToDP as wP } from 'react-native-responsive-screen';
import { FlatGrid } from 'react-native-super-grid';

import Loading from '../../components/loading';
import ProductItem from '../../components/product';


export default ({ route }) => {
    const [isLoaded, setLoaded] = useState(true);
    const [notFound, setNotFound] = useState(false);
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [xTotal, setTotal] = useState(1);

    const getItems = async () => {

        if(page > xTotal) {
            return;
        };

        setLoaded(true);
        setNotFound(false);

        try {
            let { data } = await api.get(`${api.defaults.baseURL}/product/list/${page}/${route.params.name.toLowerCase()}`);
            
            if(data.docs.length === 0) {
                setNotFound(true);
            };

            // verifica se a produto já existe.
            // caso exista remova da lista.
            for(let i = 0; i < products.length; ++i) {
                for(let j = 0; j < data.docs.length; ++j) {
                    if(products[i]._id === data.docs[j]._id) {
                        data.docs.length = j;
                    };
                };
            };

            setProducts([...products, ...data.docs]);
            setTotal(data.totalPages);
            setPage(page + 1);
        }catch(error) {
            console.log(error);
        }finally {
            setLoaded(false);
        };
    };

    const renterItem = useCallback(({item}) => (
        <ProductItem item={item}/>
    ), []);

    const keyExtractor = useCallback((key) => key._id, []);

    useEffect(() => {
        setTimeout(() => {
            getItems();
        }, 2000);
    }, [route.params.name]);

    if(notFound) {
        return(
            <Container>
                <ContainerSearch>
                    <Searchbar 
                        placeholder='faça sua busca ...'
                        style={{
                            marginTop: hP('12%'),
                            width: wP('85%'),
                            height: hP('7%'),
                            elevation: 2,
                            fontFamily: 'Nunito_300Light',
                            color: '#a9a9a9',
                            borderRadius: hP('1%')
                        }}
                        selectionColor='#a9a9a9'
                        onSubmitEditing={() => console.log('execute function')}
                        onIconPress={() => console.log('search')}
                    />
                </ContainerSearch>
                <ContainerNotFound>
                    <Image 
                        source={require('../../assets/not-found.png')}
                        resizeMode='contain'
                    />

                    <Label>Nenhum resultado encontrado!</Label>
                </ContainerNotFound>
            </Container>
        )
    };
    
    return(
        <Container>
            <ContainerSearch>
                <Searchbar 
                    placeholder='faça sua busca ...'
                    style={{
                        marginTop: hP('12%'),
                        width: wP('89%'),
                        height: hP('7%'),
                        elevation: 2,
                        fontFamily: 'Nunito_300Light',
                        color: '#a9a9a9',
                        borderRadius: hP('1%')
                    }}
                    selectionColor='#a9a9a9'
                    onSubmitEditing={() => console.log('execute function')}
                    onIconPress={() => console.log('search')}
                />
            </ContainerSearch>

            <ContentMain>
                <FlatGrid 
                    data={products}
                    keyExtractor={keyExtractor}
                    renderItem={renterItem}
                    spacing={1}
                    onEndReachedThreshold={0.1}
                    onEndReached={getItems}
                    showsVerticalScrollIndicator={false}
                    windowSize={10}
                />
            </ContentMain>

            {isLoaded && (
                <Loading />
            )}
        </Container>
    );
};
