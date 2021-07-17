import { useEffect } from "react";
import { Container } from "./style";
import { api } from '../../services/api'

export function TransactionsTable(){

    useEffect(() => {
        api.get('transactions')
        .then(response => console.log(response.data))
    },[])

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit"> R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>16/07/2021</td>
                    </tr>  
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$1.000</td>
                        <td>Casa</td>
                        <td>16/07/2021</td>
                    </tr>  
                 
                </tbody>
            </table>
        </Container>
    )

}

//Cria a requisição com o axios com uma api comum usando axios.create, e passa uma BaseURL que estará em todas as requisições
//Depois vai no index principal da aplicação e cria os parâmetros do miragejs com criateServer e seus parâmetros, sendo um deles route()
//Dentro da função route() coloca o this.namespace que afirma que todas as requisições para uma rota setada dentro do namespace será uma comunicação com a fakeApi do mirage
//Depois afirma que todas as requisições get para uma certa rota depois de /api/ devera retornar um array de objeto com as informações desejadas