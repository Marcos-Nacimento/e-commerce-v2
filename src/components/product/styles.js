import styled from 'styled-components/native';
import 
{
    heightPercentageToDP as hP,
    widthPercentageToDP as wP,
} from 'react-native-responsive-screen';

export const Container = styled.View `
    height: ${hP('35%')}px;
    width: ${wP('40%')}px;
    background-color: #FFFFFF;
    margin: ${hP('1%')}px;
    elevation: 3;
    align-items: center;
    border-radius: ${hP('1%')}px;
`;

export const Image = styled.Image `
    height: ${hP('20%')}px;
    width: ${wP('30%')}px;
`;

export const Label = styled.Text `
    font-family: 'Nunito_600SemiBold';
    width: ${wP('25%')}px;
    color: #808080;
`;

export const Price = styled.Text `
    color: ${(props) => props.color};
    font-family: 'Nunito_600SemiBold';
`;

export const Amount = styled.Text `
    font-family: 'Nunito_300Light';
    margin-left: ${hP('2%')}px;
    margin-right: ${hP('2%')}px;
    color: #808080;
`;

export const NameButton = styled.Text `
    font-family: 'Nunito_300Light';
    color: #FFFFFF;
`;

export const Actions = styled.View `
    flex-direction: row;
    justify-content: space-between;
`;

export const ButtonAction = styled.TouchableOpacity ``;

export const ButtonContainer = styled.TouchableOpacity `
    height: ${hP('4%')}px;
    width: ${wP('25%')}px;
    background-color: ${(props) => props.bg};
    margin-top: ${hP('1%')}px;
    border-radius: ${hP('1%')}px;
    justify-content: center;
    align-items: center;
`;