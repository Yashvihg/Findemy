import React from "react";
import CartCards from "../../components/CartCards/CartCards";
import CartCheckout from "../../components/CartCheckout/CartCheckout";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import courseData from "../../dummy/coursedetails.json";

function CartPage() {
  return (
    <>
      <Navbar />
      <div className="container px-5">
        <div className="mt-4 mb-3">
          <h1>Shopping Cart</h1>
        </div>
        {/* <div className="row"> */}
        <p>2 courses in cart</p>
        {/* <p className="col-2">Total: </p> */}
        {/* </div> */}
        <div className="row">
          <div className="col-md-9">
            {courseData.map((item) => {
              return (
                <>
                  <CartCards
                    title={item?.title}
                    imageUrl={item?.imageUrl}
                    rating={item?.rating}
                    instructorName={item?.instructorName}
                    price={item?.price}
                    popularity={item?.popularity}
                  ></CartCards>
                </>
              );
            })}
          </div>
          <div className="col-md-3">
            <CartCheckout />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CartPage;
