import React from 'react'
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import Card from 'react-bootstrap/Card';


const MiApi = ({setFeriados, feriados, buscador}) => {

  
  
  useEffect(() => {
      consultarApi();
    }, []);

  const consultarApi = async () => {
    const url ="https://api.victorsanmartin.com/feriados/en.json"
    const response = await fetch(url);
    const data = await response.json();
    //setFeriados(data.data.sort((a, b) => (a.type > b.type ? 1 : -1 )));
    setFeriados(data.data.sort((a, b) => {
      // Orden Ascendente por type
      if (a.type < b.type) return -1;
      if (a.type > b.type) return 1;
    
      // Si type es iagual, ordena ascendente por la fecha
      if (a.date < b.date) return -1;
      if (a.date > b.date) return 1;
    
      // If both type and date are the same, no change is needed
      return 0;
    }))

    

  };

  return (
    <div >

     {/* {feriados.filter((feriado) => {
          return (buscador=="" ||
            feriado.date.includes(buscador) ||
            feriado.title.toLowerCase().includes(buscador.toLowerCase()) ||
            feriado.type.toLowerCase().includes(buscador.toLowerCase()) ||
            feriado.extra.toLowerCase().includes(buscador.toLowerCase())
          );
        }).map((feriado, index) => (
          <Card key={index} style={{ width: '18rem' }}>
          <Card.Header>{feriado.date}</Card.Header>
          <Card.Body>
            <Card.Title>{feriado.extra}</Card.Title>
            <Card.Text>
            {feriado.title}
            </Card.Text>
          </Card.Body>
        </Card>
          ))} */}
     
       <Table className='tblPpal' responsive striped bordered hover>
        <thead>
          <tr className='table-primary'>
            <th  >FECHA</th>
            <th>TITULO</th>
            <th>TIPO</th>
            <th>EXTRA</th>
          </tr>
        </thead>
        <tbody>
          {feriados.filter((feriado) => {
          return (buscador=="" ||
            feriado.date.includes(buscador) ||
            feriado.title.toLowerCase().includes(buscador.toLowerCase()) ||
            feriado.type.toLowerCase().includes(buscador.toLowerCase()) ||
            feriado.extra.toLowerCase().includes(buscador.toLowerCase())
          );
        }).map((feriado, index) => (
            <tr key={index} style={{fontWeight: 'bold'}}>
              <td>{feriado.date}</td>
              <td>{feriado.title}</td>
              <td>{feriado.type}</td>
              <td>{feriado.extra}</td>
            </tr>
          ))}
        </tbody>
      </Table> 
      
    </div>
  )
}

export default MiApi
