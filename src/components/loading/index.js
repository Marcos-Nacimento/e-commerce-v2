import React from 'react';
import { ContentModal, Label } from './styles';
import 
{
    heightPercentageToDP as hP,
    widthPercentageToDP as wP
} from 'react-native-responsive-screen';
import Modal from 'react-native-modal';
import Lottie from 'lottie-react-native';

export default () => {
    return(
        <Modal
            isVisible={true}
            backdropColor='#f0f8ff'
        >
            <ContentModal>
                <Lottie
                    source={require('../../assets/loading.json')}
                    loop
                    autoPlay
                    style={{
                        height: hP('30%'),
                        width: wP('30%')
                    }}
                />
                    <Label>Aguarde ...</Label>
            </ContentModal>
        </Modal>
    );
};

