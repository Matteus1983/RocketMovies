import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { MovieItem } from '../../components/MovieItem'
import { Button } from '../../components/Button'
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import { Container, Form } from './styles'

export function New(){
    return(
        <Container>
            <Header />

            <main>
                <Form>
                    
                    <header>
                        <Link to='/'><FiArrowLeft />Voltar</Link>
                        <h1>Novo filme</h1>
                    </header>
                
                    <div>
                        <Input placeholder='Título' />
                        <Input placeholder='Sua nota (de 0 a 5)'
                        type='number'
                        min='0'
                        max='5' />
                    </div>

                <Textarea placeholder='Observações'/>

                    <h2>Marcadores</h2>

                    <div className='bookmarks'>
                        <MovieItem value='React'></MovieItem>
                        <MovieItem placeholder='Novo marcador' isNew></MovieItem>
                    </div>

                    <div className='buttons'>
                        <Button title='Excluir filme'/>
                        <Button title='Salvar alterações'/>
                    </div>
                </Form>
            </main>
        </Container>
    )
}
