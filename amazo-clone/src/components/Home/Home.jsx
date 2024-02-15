
 import React from 'react'
import './Home.css';
import Product from '../products/Product';
import Footer from '../Footer/Footer';
function Home() {
  return ( 
    <div className='home'>
        <div className='home__container'>
            <img className='home__image'
            // src ="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/717RUPA1bDL._SX3000_.jpg"
            // src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71j8damPo5L._SX3000_.jpg" alt="image"

            src ="https://m.media-amazon.com/images/I/61GfWyQax7L._SX3000_.jpg"
             />
             
 
            <div className='home__row'>

                <Product 
                id="12321341"
                title="Lunar New Year "
                price= {4.99}
                rating={5}
                
                // image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61R2tZtsFkL._AC_UY218_.jpg"
                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/LunarNY/Fuji_Single_card_Lunar_New_Year_Graphics_1x_EN._SY304_CB585956471_.jpg"

                
                />

                <Product
                id="49538094"
                title="MaxNova Beanie Hat Thick Warm Winter Hat Unisex"
                price= {16.99}
                rating={4}  
                image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/81Vu4m8AMmL._AC_UL320_.jpg"
                 />
                  <Product
                id="49538093"
                title="[Kenwood] Kenwood kMix Picasso electric kettle Tea & Coffee Kettle Hot Water 1L 220V "
                price= {179.99}
                rating={4}  
                image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/31q01K-vhHL._AC_UY218_.jpg"
                 />
                  <Product
                id="49538095"
                title="Garmin epix Gen 2, Premium active smartwatch, touchscreen AMOLED display, Adventure Watch with Advanced Features, Slate Steel "
                price= {149.00}
                rating={4}  
                image="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71o1sLE513L._AC_UY218_.jpg"
                 />
            </div>

            <div className='home__row'>

                <Product 
                id="4903850"
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                price={199.99}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                />
                <Product 
                id="23445930"
                title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                price={98.99}
                rating={5}
                image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                />
                <Product 
                id="3254354345"
                title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver"
                price={598.99}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                />
                 <Product 
                id="3254354345"
                title="New year, now you"
                price={598.99}
                rating={4}
                // image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"

                image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/NYNY/Fuji_NYNY_Card_1x_12_Dec_EN._SY304_CB586552015_.jpg"
                
                
                />
                
            </div>

            <div className='home__row'>

                <Product 
                id="90829332"
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                price={1094.98}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                />
                
            </div>
           

        </div>
        <div className ="footer">
          <Footer/>

        </div>

    </div>
  )
}

export default Home