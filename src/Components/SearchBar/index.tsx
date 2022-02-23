import searchImg from '../../assets/ic_Search.png'
import logoImg from '../../assets/Logo_ML.png'
import { Container, Content } from './styles'

export function SearchBar() {
    return (
        <Container>
            <Content className="topnav">
                <img src={logoImg} alt="Mercado Livre" className="logo" />
                <input type="text" placeholder="Nunca dejes de buscar"></input>
                <button type="submit"><img src={searchImg} alt="botão de busca" /></button>
            </Content>
        </Container>
    )
}