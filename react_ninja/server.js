'use strict'

const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server') // construtor para criar um servidor
const config = require('./webpack.config') // arquivo de configuração de webpack

new WebpackDevServer(webpack(config), { // objeto com algumas informações para o webpack funcionar corretamente
    publicPath: config.output.publicPath, // direto do arquivo
    host : true, // fazer o hot loader de forma correta
    historyApiFallback : true, // 
    stats:  { colors: true} // objeto de saída de comando continue sendo colorido
}).listen(3000, (err)=>{
    if(err){
        return console.log(err)
    }
    console.log('Listening on http://localhost:3000')// funcao de erro
}) // ouvir a porta 3000