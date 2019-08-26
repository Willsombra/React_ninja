'use strict'


// nova importação utilizando ECS6

import React from 'react'
// import ReactDOM from 'react-dom'
import { render} from 'react-dom'// export nomeado (para renomear, utilize as) 
import { AppContainer} from 'react-hot-loader' // modulo, componente que ao renderizar tudo dentro possa ser feito atualização atraves do hot loader
import App from './app'

// var Title = require('./app')
// var React = require('react')
// var ReactDOM = require('react-dom')

//ReactDOM.render( // método antigo utilizando react DOM

const renderApp = (NextApp) => {

    render(
        // React.createElement(Title), // formato react
        <AppContainer>
            <NextApp/>
        </AppContainer>,// componente principal da aplicação ,// formato JSX
        
        document.querySelector('[data-js="app"]')
    )   
}

renderApp(App)

// verificar se hot loader está funcionando

if(module.hot){ // somente usado para desenvolvimento
    module.hot.accept('./app', () => {
        const NextApp = require('./app').default // proxima atualizacao do app, default usa padrao JS pra exportar
        renderApp(NextApp)
    }) // metodo que vai atualizar os outros componentes
}
