require('dotenv').config();
const axios = require('axios').default;
const readlineSync = require('readline-sync');

const searchTemps = (latitude, longitude) => {
    return new Promise ((resolve, reject) => {
        axios.get(process.env.WEATHER_API, {
            params: {
                lat: latitude,
                lon: longitude,
                appid: process.env.API_KEY,
                units: process.env.UNITS
            }

        }).then((response) => {
            resolve(response)

        }).catch((error) => {
            reject(error)
        })
    })
}

const loop = () => {
    var opcao;
    opcao = readlineSync.question('Bem vindo\n\nDigite uma das opcoes abaixo para:\n\n1- Buscar a temperatura com base na latitude e longitude\n2- Sair\n');
    switch (opcao) {
        case '1':          
            let latitude = readlineSync.question('Informe a latitude: ');
            let longitude = readlineSync.question('Informe a longitude: ');
            
            searchTemps(latitude, longitude)
                .then((response) => {
                    console.log(`A temperatura do local indicado é: ${response.data.main.temp}\n`);
                    loop()
                }).catch((error) => {
                    console.log('Erro ao buscar temperatura');
                    loop()
                });            
            break;

        case '2':
            console.log("Encerrando");
            break;

        default:
            console.log("Digite uma opção valida"); 
            loop()
            break;
    }
}
loop()