import React from 'react'

export default function NotFoundScreen() {
  let { data, isLoading} = useGetProductsQuery()
  return (
    <div class="AllProducts">
      <a href='http://localhost:3000/'>Retour</a>
      {
      !isLoading ?
      data.map((product) =>{
        return <div class="one_product">
              {/* <link to={'/${product.id}'}>{product.title}</link> */}
              <h3>OUIII</h3>
            </div>
      }) : 
      <span>Loading...</span>
    }
    </div>
  )
}
