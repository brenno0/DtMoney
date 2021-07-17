import { useState } from 'react';
import logoImg from '../../assets/logo.svg';

import Modal from 'react-modal'
import { Container,Content } from './styles';

interface HeaderProps {
    onOpenNewTransactionModal:() => void;
}


export function Header({onOpenNewTransactionModal}:HeaderProps){
   
   
    return(
        
        <Container>
            <Content>
            <img src={logoImg} alt="br money" />
            <button onClick={onOpenNewTransactionModal} type="button" >
                Nova transação
            </button>


        
            </Content>
        </Container>

    )
      

}