import styled from 'styled-components/native';
import 
{
    heightPercentageToDP as hP,
    widthPercentageToDP as wP,
} from 'react-native-responsive-screen';

export const Container = styled.View `
    height: ${hP('40%')}px;
    width: ${wP('94%')}px;
    background-color: ${(props) => props.bg};
    border-radius: ${hP('2%')}px;
    margin: ${hP('1%')}px;
`;

export const Header = styled.View `
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: ${hP('1%')}px;
`;

export const Title = styled.Text `
    font-family: 'Nunito_400Regular';
    color: #FFFFFF;
`;