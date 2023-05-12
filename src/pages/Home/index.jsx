import { Container, Options, Content} from './styles'
import { Link } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Note } from '../../components/Note'
import { BiPlus } from 'react-icons/bi'

export function Home(){
    return(
        <Container>
            <Header />

            <Options>
                <h2>Meus filmes</h2>
             <Link to='/new'><button><BiPlus/>Adicionar filme</button></Link>
            </Options>

            <Content>
                
               <Note data={{
                title: 'Interestellar',
                tags: [
                    {id: '1', name:'Ficção Científica'},
                    {id: '2', name:'Drama'},
                    {id: '3', name:'Família'},
                    ]
                    }} />

                <Note data={{
                title: 'Interestellar',
                tags: [
                    {id: '1', name:'Ficção Científica'},
                    {id: '2', name:'Drama'},
                    {id: '3', name:'Família'},
                    ]
                    }} />

                <Note data={{
                title: 'Interestellar',
                tags: [
                    {id: '1', name:'Ficção Científica'},
                    {id: '2', name:'Drama'},
                    {id: '3', name:'Família'},
                    ]
                    }} />

            </Content>



        </Container>
    );
}