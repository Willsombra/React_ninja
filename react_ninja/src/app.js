'use strict'

// var React = require('react')

import React from 'react'

const App =  React.createClass({ // const deixa imutavel, nao deixa reatribuir esta variavel
    render: function (){
        // return React.createElement('h1', null, 'Teste React')  // padrao React
        // return <h1>Teste React !!!</h1>// novo padrao utilizando babelrc lendo JSX
        return <div>Aplicação React movendo para GitHub!!</div>// aplicação que chamrá todos os componentes
    }
})

  
// module.exports = Title

export default App // exportar no padrao ECS6