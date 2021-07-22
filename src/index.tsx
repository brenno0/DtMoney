import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({
  //Banco de dados sempre começa vazio
  models: {
    transaction:Model, //tabela no banco de dados do Miragejs
  },

  seeds(server) {
    server.db.loadData({
      //A tabela tem sempre o nome do model no plural
      transactions: [             // A tabela é sempre o model no plural 
      {
        id:1,
        title:'Freelance de website',
        type:'deposit',
        category:'Dev',
        amount:6000,
        createdAt: new Date('2021-02-12 09:00:00')
      },
      {
        id:2,
        title:'Aluguel',
        type:'withdraw',
        category:'Casa',
        amount:1100,
        createdAt: new Date('2021-02-12 12:00:00')
      }
    ]
    })
  },

  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction') //Retorna todas as transações existentes na tabela(transaction) do banco de dados(Schema)
    })

    this.post('/transactions', (schema,request) => {//schema é o banco de dados interno do mirajeJs
      const data = JSON.parse(request.requestBody)
      

      return schema.create('transaction', data); //Criando uma nova linha na tabela do banco schema
    })
  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

