import styled from 'styled-components/native';
import 
{
    heightPercentageToDP as hP,
    widthPercentageToDP as wP,
} from 'react-native-responsive-screen';

export const Container = styled.View `
    flex: 1;
    background-color: #FFFFFF;
    align-items: center;
`;

export const Header = styled.View `
    height: ${hP('14%')}px;
    width: ${wP('100%')}px;
    background-color: ${(props) => props.bg};
    border-bottom-left-radius: ${hP('2%')}px;
    border-bottom-right-radius: ${hP('2%')}px;
    margin-bottom: ${hP('4%')}px;
    justify-content: center;
    padding: ${hP('2%')}px;
`;

export const Scroll = styled.ScrollView ``;

export const Title = styled.Text `
    color: #FFFF;
    font-family: 'Nunito_300Light';
    font-size: ${hP('3%')}px;
`;