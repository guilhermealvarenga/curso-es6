// import axios from 'axios';

// class Api {
//     static async getUserInfo(username){
//         try {
//             const response = await axios.get(`https://api.github.com/users/${username}`);
            
//             console.log(response);
//         } catch (err) {
//             console.warn('Erro na API');
//         }
//     }
// }

// Api.getUserInfo('guilhermealvarenga');
// Api.getUserInfo('guilhermealvarengaasfasf');

// Funão delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
function umPorSegundo() { 
    delay().then(() => { console.log('1s');
        delay().then(() => { console.log('2s');
            delay().then(() => { 
                console.log('3s');
            }); 
        })
    }); 
}
umPorSegundo();
import axios from 'axios';
function getUserFromGithub(user) { 
    axios.get(`https://api.github.com/users/${user}`)
    .then(response => { 
        console.log(response.data);
    })
    .catch(err => {
        console.log('Usuário não existe'); })
}
getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');
    
class Github {
    static getRepositories(repo) {
        axios.get(`https://api.github.com/repos/${repo}`)
        .then(response => {
            console.log(response.data); })
        .catch(err => { 
            console.log('Repositório não existe');
        })
    } 
}

Github.getRepositories('rocketseat/rocketseat.com.br'); 
Github.getRepositories('rocketseat/dslkvmskv');

const buscaUsuario = usuario => { axios.get(`https://api.github.com/users/${user}`)
                                    .then(response => { 
                                        console.log(response.data);
                                    })
                                    .catch(err => {
                                        console.log('Usuário não existe'); });
                                    }
buscaUsuario('diego3g');