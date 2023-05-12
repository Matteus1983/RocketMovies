import { Container, Profile } from './styles'
import { Input } from '../Input'
import { Link } from 'react-router-dom'

export function Header(){
    return(
        <Container>
            <Profile>
                <h1>RocketMovies</h1>

            <Input placeholder='Pesquisar pelo título'/>

            <Link to='/profile'><div className='profile'>
                <img 
                    src="https://github.com/Matteus1983.png" 
                    alt="Foto do usuário" 
                />
                <div className='dates'>
                    <strong>Mateus Moura</strong>
                    <button>Sair</button>
                </div>
            </div></Link>

            </Profile>
        </Container>
    )
}