import { useTransactions } from "../../hooks/useTransactions";

import { Container } from "./style";

export function TransactionsTable(){

    const { transactions } = useTransactions()

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
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                        <td>{transaction.title}</td>
                        <td className={transaction.type}> {new Intl.NumberFormat('pt-BR', {
                            style:'currency',
                            currency:'BRL'
                        }).format(transaction.amount)}
                        </td>
                       
                        <td>{transaction.category}</td>
                        <td>{new Intl.DateTimeFormat('pt-BR').format(
                            new Date(transaction.createdAt)
                        )}</td>
                        </tr> 
                    ))}
                  
                 
                </tbody>
            </table>
        </Container>
    )

}

//Cria a requisição com o axios com uma api comum usando axios.create, e passa uma BaseURL que estará em todas as requisições
//Depois vai no index principal da aplicação e cria os parâmetros do miragejs com criateServer e seus parâmetros, sendo um deles route()
//Dentro da função route() coloca o this.namespace que afirma que todas as requisições para uma rota setada dentro do namespace será uma comunicação com a fakeApi do mirage
//Depois afirma que todas as requisições get para uma certa rota depois de /api/ devera retornar um array de objeto com as informações desejadas