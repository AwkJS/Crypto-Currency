import React, { useState } from 'react';
import api from '../../api';
import * as H from './styles'

const Home: React.FC = () => {

    const [priceBitcoin, setPriceBitcoin] = useState('');
    const [priceEthereum, setPriceEthereum] = useState('');

    
    async function getAllCryptos(){

        const cryptosResponse = await api.get('coins/list', {
            params: {
                include_platform: true
            }
        });
        console.log(cryptosResponse)

    }

    async function getAllSupportedCurrencies(){

        const SupportedResponse = await api.get('simple/supported_vs_currencies');
        console.log(SupportedResponse)

    }

    //getAllCryptos()
    //getAllSupportedCurrencies()

    async function pricesCrypto(){

        const priceResponse = await api.get('simple/price', {
            params: {
                ids: "bitcoin,ethereum",
                vs_currencies: "usd",
                include_market_cap: true,
                include_24hr_vol: true,
                include_24hr_change :true,
                include_last_updated_at: true,
            }
        })


        setPriceBitcoin(priceResponse.data.bitcoin.usd)
        setPriceEthereum(priceResponse.data.ethereum.usd)
    }

    pricesCrypto()

    return (

        <>

            <H.GlobalContainer>
                <h1>{priceBitcoin}</h1>
                <h1>{priceEthereum}</h1>
            </H.GlobalContainer>
            
        </>

    );
};

export default Home;