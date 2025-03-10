const mongoose = require ('mongoose')

async function conectaBancoDeDados(){
    try {
        console.log('Conexão com o banco de dados iniciou')

        await mongoose.connect('mongodb+srv://iaranitamiguel:TrwdO8YE5KuQP6u7@cluster0.zxim5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
      
        console.log('Conexão feita  com o banco de dados com sucesso!')
        } catch(erro) {
            console.log(erro)
        }

        module.exports = conectaBancoDeDados
}