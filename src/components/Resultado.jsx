import styled from "@emotion/styled"

const Resultad0 = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;

`
const Texto = styled.p`
    font-size: 18;
    span{
        font-weight: 700;
    }
`
const Precio = styled.p`
    font-size: 30px;
    span{
        font-weight: 700;
    }
`

const Resultado = ({resultado}) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE} = resultado;
    
  return (
    <Resultad0>
        <Precio>El Precio es de: <span>{PRICE}</span></Precio>
        <Texto>El Precio más alto del día: <span>{HIGHDAY}</span></Texto>
        <Texto>El Precio más bajo del día: <span>{LOWDAY}</span></Texto>
        <Texto>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
        <Texto>Última Actualización: <span>{LASTUPDATE}</span></Texto>

    </Resultad0>
  )
}

export default Resultado