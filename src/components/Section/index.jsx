import { Container } from './styles'
import { BiTime } from 'react-icons/bi'


export function Section({ title, children}){
    return(
        <Container>
            
            <div className='title'>
                <h2>{title}</h2> 
                <img src="/src/assets/estrelas.png" alt="estrelas rosas" />
            </div>
            
            <div className='time'>
                <img src="https://github.com/Matteus1983.png" alt="Foto do usuário" />
                <span>Por Mateus Moura</span>
                <div><BiTime />23/05/22 às 08:00</div>
            </div>

            {children}
        </Container>
    )
}