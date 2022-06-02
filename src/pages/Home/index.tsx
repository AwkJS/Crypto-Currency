import React, { useState } from 'react';
import api from '../../api';
import * as H from './styles'

const Home: React.FC = () => {

    const [listCrypto, setListCrypto] = useState();

    async function getAllCryptos(){

        const cryptosResponse = await api.get('coins/list', {
            params: {
                include_platform: true
            }
        });
        console.log(cryptosResponse)

    }

    async function priceCrypto(){

        const priceEthResponse = await api.get('simple/price', {
            params: {

            }
        })

    }

    getAllCryptos()



    return (

        <>

            <H.GlobalContainer>
                <h1></h1>
            </H.GlobalContainer>
            
        </>

    );
};

export default Home;