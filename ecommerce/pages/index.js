import FooterBanner from '../components/FooterBanner'
import HeroBanner from '../components/HeroBanner'
import React from 'react'
import { client, urlFor } from '../lib/sanityConfig'  // Import urlFor from sanityConfig

const Home = ({ products, bannerData }) => {
  return (
    <div>
      <HeroBanner heroBanner={bannerData} />
      {
        console.log(bannerData)
      }
      <div className='products-heading'>
        <h2>Top Picks</h2>
        <p>Speakers are many variations</p>
      </div>

      <div className='products-container'>
        {products?.map(
          (product) => (
            <div key={product._id}>
              <h3>{product.name}</h3>
              {product.image && (
                <img
                  src={urlFor(product.image)
                    .width(200) // Set the desired width
                    .url()}
                  alt={product.name}
                />
              )}
              {/* Add more details or components as needed */}
            </div>
          )
        )}
      </div>
      <FooterBanner />
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type == "product"]`;
  const products = await client.fetch(query);
  const bannerQuery = `*[_type == "banner"]`;
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  }
}

export default Home
