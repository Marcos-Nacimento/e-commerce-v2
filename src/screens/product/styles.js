import styled from 'styled-components/native';
import 
{
    heightPercentageToDP as hP,
    widthPercentageToDP as wP,
} from 'react-native-responsive-screen';

export const Container = styled.View `
    flex: 1;
    background-color: #FFFF;
`;

export const ContainerSearch = styled.View `
    align-items: center;
`;

export const ContainerNotFound = styled.View `
    justify-content: center;
    align-items: center;
`;

export const Image = styled.Image `
    height: ${hP('40%')}px;
    width: ${wP('60%')}px;
`;

export const Label = styled.Text `
    color: #696969;
    font-family: 'Nunito_300Light';
`;

export const ContentMain = styled.View `
    margin: ${hP('2%')}px;
    justify-content: center;
    margin-bottom: ${hP('23%')}px;
`;


