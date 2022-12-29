import {useEffect, useState} from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import Error from './Error'

const InputSubmit = styled.input `
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 10px;
    transition: background-color .3s ease;
    margin-top: 30px;

    &:hover{
        background-color: #7173f0;
        cursor: pointer;
    }
`

const Formulario = ({setMonedas}) => {
    const monedas = [{id: 'ARS', nombre: 'Peso Argentino'},{id: 'EUR', nombre: 'Euro'},{id: 'BRL', nombre: 'Reales de BR'},{id: 'USD', nombre: 'Dolar EEUU'},]


    const [criptos, setCriptos] = useState ([])
    const [error, setError] = useState ([])
    const [moneda, SelectMonedas] = useSelectMonedas('Elige Tu Moneda', monedas)
    const [criptomoneda, SelectCriptomoneda] = useSelectMonedas('Elige Tu CriptoMoneda', criptos)
    
    useEffect( () => {
        const consultarAPI = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()

            const arrayCriptos = resultado.Data.map( cripto => {
                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }
                return objeto
            })

            setCriptos(arrayCriptos)

        }
        consultarAPI();
    }, [])

    const handleSubmit = e => {
        e.preventDefault()

        if([moneda, criptomoneda].includes('')) {
            setError(true)
            return
        }

        setError(false)
        setMonedas({
            moneda,
            criptomoneda
        })
    }

  return (
    <>
        {error && <Error>Todos Los Campos Son Obligatorios</Error>}
        <form
            onSubmit={handleSubmit}
        >
            <SelectMonedas />
            <SelectCriptomoneda />
            
            <InputSubmit 
                type="submit"
                value="Cotizar"/>
        </form>
    
    </>
  )
}

export default Formulario