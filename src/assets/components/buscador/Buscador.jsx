import React from 'react'

const Buscador = ({ buscador, setBuscador }) => {
  return (
    <div>
      <input className='txtBusqueda'
        type="text"
        placeholder="Buscar Feriado"
        value={buscador}
        onChange={(e) => {
          setBuscador(e.target.value);
        }}
      />
    </div>
  )
}

export default Buscador
