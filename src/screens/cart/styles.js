import styled from 'styled-components/native';
import 
{ 
    heightPercentageToDP as hP,
    widthPercentageToDP as wP,
} from 'react-native-responsive-screen';

export const Container = styled.View `
    flex: 1;
    background-color: #FFFFFF;
`;

export const ContainerEmptyCart = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
`;

export const Image = styled.Image `
    height: ${hP('20%')}px;
    width: ${wP('50%')}px;
`;

export const Label = styled.Text `
    font-family: 'Nunito_300Light';
    color: #808080;
`;

export const Title = styled.Text `
    font-family: 'Nunito_400Regular';
    font-size: ${hP('2%')}px;
    font-weight: bold;
`;

export const ContainerSubTitle = styled.View `
    padding: ${hP('5%')}px;
`;

export const ButtonContainerGoBack = styled.TouchableOpacity `
    height: ${hP('6%')}px;
    width: ${wP('70%')}px;
    border-radius: ${hP('2%')}px;
    background-color: ${(props) => props.bg};
    justify-content: center;
    align-items: center;
`;

export const ButtonName = styled.Text `
    color: #FFFFFF;
    font-family: 'Nunito_300Light';
`;

export const Header = styled.View `
    height: ${hP('14%')}px;
    background-color: ${(props) => props.bg};
    border-bottom-left-radius: ${hP('2%')}px;
    border-bottom-right-radius: ${hP('2%')}px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: ${hP('2%')}px;
`;

export const TitleHeader = styled.Text `
    font-family: 'Nunito_300Light';
    color: #FFFFFF;
    font-size: ${hP('3%')}px;
`;

export const ContainerButtonFooter = styled.View `
    top: ${hP('80%')}px;
    position: absolute;
    align-items: center;
    margin: auto;
    right: 0;
    left: 0;
`;

export const ButtonFooter = styled.TouchableOpacity `
    height: ${hP('7%')}px;
    width: ${wP('80%')}px;
    border-radius: ${hP('1%')}px;
    elevation: 2;
    background-color: ${(props) => props.bg};
    justify-content: center;
    align-items: center;
`;

export const ContainerProduct = styled.View `
    height: ${hP('20%')}px;
    width: ${wP('85%')}px;
    flex-direction: row;
    justify-content: space-between;
    padding: ${hP('1%')}px;
`;

export const Scroll = styled.ScrollView ``;

export const ImageProduct = styled.Image `
    height: ${hP('10%')}px;
    width: ${wP('20%')}px;
`;

export const ContentRightProduct = styled.View `
    align-items: center;
`;

export const NameProduct = styled.Text `
    color: #808080;
    margin-top: ${hP('3%')}px;
    width: ${wP('42%')}px;
`;

export const Price = styled.Text `
    color: ${(props) => props.bg};
    font-family: 'Nunito_600SemiBold';
`;

export const Actions = styled.View `
    flex-direction: row;
    justify-content: space-between;
`;

export const ButtonAction = styled.TouchableOpacity ``;

export const Amount = styled.Text `
    font-family: 'Nunito_300Light';
    margin-left: ${hP('2%')}px;
    margin-right: ${hP('2%')}px;
    color: #808080;
`;

export const ContainerMainProduct = styled.View ``;

export const ContainerTotalPrice = styled.View `
    flex-direction: row;
    margin: ${hP('2%')}px;
`;

export const TotalPrice = styled.Text `
    color: #FFFF;
    font-family: 'Nunito_600SemiBold';
`;

export const ButtonDeleteAllItems = styled.TouchableOpacity `
    flex-direction: row;
    margin-top: ${hP('5%')}px;
`;

export const NameButtonDelete = styled.Text `
    font-family: 'Nunito_400Regular';
    color: #808080;
`;

export const MenuFooter = styled.View `
    margin-bottom: ${hP('15%')}px;
`;

export const MenuContentFooter = styled.View `
    flex-direction: row;
    justify-content: space-between;
    margin-top: ${hP('3%')}px;
`;

export const MenuContentLeft = styled.View ``;

export const MenuContentRight = styled.View ``;

export const LabelMenu = styled.Text `
    font-family: 'Nunito_400Regular';
    color: #808080;
`;

export const LabelMenuTotal = styled.Text `
    font-family: 'Nunito_400Regular';
    color: #808080;
    font-weight: bold;
`;
