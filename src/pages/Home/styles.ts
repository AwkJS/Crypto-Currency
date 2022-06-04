import styled from 'styled-components';

export const GlobalContainer = styled.div`
      
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #FFFFFF;
    width: 100%;
`

export const CryptosContainer = styled.div`


    display: flex;
    flex-direction: row;
    align-items: center;

`


export const CryptoCard = styled.div`

    display: flex;
    flex-direction: row;
    width: 350px;
    height: 100px;
    background: #c6c6c6;
    border-radius: 15px;
    border: 1px solid #c6c6c6;
    margin: 50px;

`

export const CryptoInfo = styled.div`

    display: flex;
    flex-direction: column;
    margin: 20px;
    justify-content: center;


`
 
export const CryptoIcon = styled.img`

    width: 50px;
    height: 50px;
    margin: 20px;


`