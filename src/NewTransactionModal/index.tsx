import { Container } from './style';
import Modal from 'react-modal'

interface NewTransactionModalProps  {
    isOpen:boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen,onRequestClose}:NewTransactionModalProps){
   
   
    return(
        <Container>
         <Modal isOpen={isOpen} 
        onRequestClose={onRequestClose}
      >
          <h2>Cadastrar Transação</h2>

      </Modal>
        </Container>
    )
      

}