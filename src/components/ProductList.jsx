import './ProductList.css'

function ProductList() {
  const product = [
    {id: 0, title: '바지', price: 10000, info: '좋은 바지', image: 'https://picsum.photos/id/9/5000/3269'},
    {id: 1, title: '양말', price: 2000, info: '좋은 양말', image: 'https://picsum.photos/id/11/5000/3269'},
    {id: 2, title: '티셔츠', price: 7000, info: '좋은 티셔츠', image: 'https://picsum.photos/id/14/5000/3269'}
  ]
  
  
  return (
    <>
  <div className="container">
    { product.map(cardElements => {
      return (
        <div className="card" key={cardElements.id}>
        <div className="cardImage" style={{backgroundImage: `url('${cardElements.image}')`}}  ></div>
        <p className="item">{cardElements.title}</p>
        <p className="price">{cardElements.price}</p>
        </div>
        )
      })
    }
  </div>
  </>
  )

}

export default ProductList