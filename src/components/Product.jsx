import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = ({ items, cart, setCart, isAuth }) => {

  const addToCart = (id, price, title, description, imgSrc) => {
    if (!isAuth) {
      return toast.error('Please Login first!');
    }
    const obj = {
      id, price, title, description, imgSrc
    }
    setCart([...cart, obj]);
    console.log("Cart element = ", cart)
    toast.success('Item added on cart');
  }


  return (
    <>
      <div className="container my-5">
        <div className="row ">
          {items.map((product) => {
            return (
              <>
                <div key={product.id} className="col-lg-4 col-md-6 my-3 text-center">
                  <div className="card" >
                    <Link to={`/product/${product.id}`}
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}>

                      <img
                        src={product.imgSrc}
                        className="card-img-top"
                        alt="..."
                      />
                    </Link>
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description}</p>
                      <div className=" ">
                        <button className="btn btn-primary mb-2">
                          {product.price} ₹
                        </button>
                        <button
                          onClick={() => addToCart(product.id, product.price, product.title, product.description, product.imgSrc)}
                          className="btn btn-warning"
                        >Add To Cart</button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
