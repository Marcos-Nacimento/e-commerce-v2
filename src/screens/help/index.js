import React from 'react';
import 
{ 
    Container,
    Header,
    Scroll,
    Title, 
} from './styles';
import { useTheme } from 'react-native-paper';

import Banner from '../../components/banner';

export default () => {
    const { colors } = useTheme();

    return(
        <Container>
            <Scroll 
                contentContainerStyle={{
                    alignItems: 'center'
                }}
                showsVerticalScrollIndicator={false}
            >
                <Header 
                    bg={colors.primary}
                >
                    <Title>Ajuda</Title>
                </Header>
                <Banner title='Meios de Pagamentos'/>
                <Banner title='Horários de Entregas'/>
                <Banner title='Contatos'/>
            </Scroll>
        </Container>
    );
};