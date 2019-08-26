'use strict' 
// criar arquivo fonte que vai gerar o pacote, leitura de arquivo de desenvolvimento para Bundle
const path = require('path') // usar modulo do node 'path'
const webpack = require('webpack') // usar o modulo do webpack com plugin necessario para o webpack config
const validate = require('webpack-validator')

module.exports = validate ({ // exportar o objeto pra fazer leitura e gerar bundle
    devtool: 'source-map', // mapa do arquivo principal, mais facil para debugar código, indica o lugar do erro
    entry: [
        'react-hot-loader/patch', // hot loader para atualizar toda alteração feita no código sem dar refresh 
        'webpack-dev-server/client?http://localhost:3000', // porta especifica 
        'webpack/hot/only-dev-server',
        path.join(__dirname, 'src', 'index')
    ], //entrada, com o caminho do arquivo principal, dirname var global
    output:{ // saída para salvar
     path: path.join(__dirname,'dist'), // gerar build do bundle e salvar em bundle
     filename: 'bundle.js', //nome do file
     publicPath: '/static/' // local ondeo o local dev server ficara vendo os arquivos de desenvolviemnto, diz onde o arquivo deve servir
    },
    plugins: [ // entrada de módulo do webpack
        new webpack.HotModuleReplacementPlugin()  // funcionar o hot loader em desenvolvimento
    ],
    module: {
        preLoaders: [{
            test : /\.js$/,
            exclude: /node_modules/,
            include: /src/,
            loader: 'standard'
        }],
        loaders: [{ // dizer o que vai fazer com cada tipo de arquivo, onde vai procurar or arquivos
          test: /\.js$/,
          exclude: /node_modules/, // nao precisa usar nome moludes, tudo esta em src
          include: /src/, // diretorio utilizado para lar os arquivos
          loader: 'babel'
        }]
        }// utilizar babel pra converter ec6 em 5
    } // assim vai funcionar em qualquer sistema operacional
)