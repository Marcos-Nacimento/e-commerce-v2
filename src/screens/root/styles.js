import styled from 'styled-components/native';
import { heightPercentageToDP as hP, widthPercentageToDP as wP } from 'react-native-responsive-screen';

export const Container = styled.View `
    flex: 1;
    background-color: #FFFF;
`;

export const ContentScrollView = styled.View `
`;

export const DotBanner = styled.TouchableOpacity `
    height: ${hP('10%')}px;
    width: ${wP('17.4%')}px;
    border-radius: ${hP("100%")}px;
    margin: ${hP('1.5%')}px;
    justify-content: center;
    align-items: center;
    elevation: 2;

`;

export const ContainerDot = styled.View `
    align-items: center;
`;

export const Label = styled.Text `
    font-family: 'Nunito_300Light';
    color: #808080;
`;

export const ContainerOffers = styled.View `
    margin-top: ${hP('1%')}px;
`;

export const Scroll = styled.ScrollView ``;

export const Image = styled.Image `
    width: ${wP('8%')}px;
    height: ${hP('10%')}px;
`;

export const FlatList = styled.FlatList ``;