import Product from "../Components/Product"

interface productParentPropType {
  addToCart: (id: string) => void
  products: any 
}

const ProductParent = ({ addToCart, products }: productParentPropType) => {
  products.forEach((product:any) => {
    if (!product.hasOwnProperty('quantity')) {
      product.quantity = 1;
    }
  });
  
  return (
    <div className="grid z-20 grid-cols-1 ex:grid-cols-2 lg:grid-cols-3 mt-20 gap-10 lg:gap-20 lg:mt-4">
      {products.filter((product:any) => product.is_available).map((product: any) =>
        <Product key={product.id} id={product.id} src={`https://api.timbu.cloud/images/${product.photos[0]?.url}`} name={product.name} price={product.current_price[0]?.NGN[0]} about={product.description} addToCart={addToCart} quantity={product.quantity} alt={product.url_slug} />
      )}
    </div>
  )
}

export default ProductParent