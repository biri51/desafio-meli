import React, { useState } from 'react'
import searchImg from '../../assets/ic_Search.png'
import logoImg from '../../assets/Logo_ML.png'
import { Container, Content } from './styles'
import { api } from '../../services/api'



export function SearchBar() {

    const [search, setSearch] = useState('')
    const [results, setResults] = useState([])
    const [detail, setDetail] = useState({
        title: '',
        thumbnail: '',
        price: '',
    })


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }
    const handleSearch = async (event: React.MouseEvent<HTMLElement>) => {
        const request = await api.get(`/sites/MLA/search?q=${search}&limit=4`)
        setResults(request.data.results)
    }

    const handleOnClick = async (id: string) => {
        const request = await api.get(`items/${id}`)
        setDetail(request.data)
        console.log(detail)
    }

    // Criar um estado pra colocar embaixo o objeto clicado.
    // organizar o layout

    return (
        <div>

            <Container>
                <img src={logoImg} alt="Mercado Livre" className="logo" />
                <input type="text" placeholder="Nunca dejes de buscar" value={search} onChange={handleInputChange} />
                <button type="submit" onClick={handleSearch}>
                    <img src={searchImg} className="lupaImg" alt="botão de busca" />
                </button>
            </Container>

            <Content>
                <div className='results'>
                    {results.map((product: any) => (
                        <li>
                            <img className="search" src={product.thumbnail} alt={product.title}></img>
                            <span className='price'>${product.price}</span>
                            <button className="id" onClick={() => handleOnClick(product.id)}>
                                <strong>{product.title}</strong>
                            </button>
                            <span className="city">{product.address.city_name}</span>
                        </li>

                    ))}
                </div>
                <div className='click'>
                    <img className="onSearch" src={detail.thumbnail} alt={detail.title}></img>
                    <span className="titleSearch">{detail.title}</span>
                    <span className="priceSearch">{detail.price}</span>
                    <button className="comprar">Comprar</button>
                </div>

            </Content>
        </div>

    )
}

