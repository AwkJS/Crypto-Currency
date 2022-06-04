import React, { useState } from 'react';
import api from '../../api';
import * as H from './styles';

import Bitcoin_Icon from '../../assets/Bitcoin_Icon.png';
import Ethereum_Icon from '../../assets/Ethereum_Icon.png';

const Home: React.FC = () => {

    const [priceBitcoinUSD, setPriceBitcoinUSD] = useState('');
    const [priceBitcoinBRL, setPriceBitcoinBRL] = useState('');

    const [priceEthereumUSD, setPriceEthereumUSD] = useState('');
    const [priceEthereumBRL, setPriceEthereumBRL] = useState('');

    
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
                vs_currencies: "usd,brl",
                include_market_cap: true,
                include_24hr_vol: true,
                include_24hr_change :true,
                include_last_updated_at: true,
            }
        })


        setPriceBitcoinUSD(priceResponse.data.bitcoin.usd)
        setPriceEthereumUSD(priceResponse.data.ethereum.usd)

        setPriceBitcoinBRL(priceResponse.data.bitcoin.brl)
        setPriceEthereumBRL(priceResponse.data.ethereum.brl)
    }

    pricesCrypto()

    return (

        <>

            <H.GlobalContainer>
                <H.CryptosContainer>
                    <H.CryptoCard>
                        <H.CryptoIcon src={Bitcoin_Icon}/>
                        <H.CryptoInfo>
                            <h1>BITCOIN</h1>
                            <span>USD: {priceBitcoinUSD} $</span>
                            <span>BRL: {priceBitcoinBRL} R$</span>
                        </H.CryptoInfo>
                    </H.CryptoCard>

                    <H.CryptoCard>
                        <H.CryptoIcon src={Ethereum_Icon}/>
                        <H.CryptoInfo>
                            <h1>ETHEREUM</h1>
                            <span>USD: {priceEthereumUSD} $</span>
                            <span>BRL: {priceEthereumBRL} R$</span>
                        </H.CryptoInfo>
                    </H.CryptoCard>
                </H.CryptosContainer>
            </H.GlobalContainer>
            
        </>

    );
};

export default Home;