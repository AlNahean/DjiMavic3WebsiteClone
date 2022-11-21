import React from "react";
import getCardHeader from "../../../Shared/Extra/getCardHeader";

const MyProductsData = [
  {
    id: 1,
    title: "ASOS Ridley High Waist",
    date: "07 April 2028",
    price: "79.49",
    quantity: "82",
  },
  {
    id: 2,
    title: "Marco Lightweight Shirt",
    date: "25 March 2018",
    price: "128.50",
    quantity: "37",
  },
  {
    id: 3,
    title: "Half Sleeve Shirt",
    date: "17 March 2018",
    price: "39.99",
    quantity: "62",
  },
  {
    id: 4,
    title: "Lightweight Jacket",
    date: "12 March 2018",
    price: "20.00",
    quantity: "184",
  },
  {
    id: 5,
    title: "ASOS Ridley High Waist",
    date: "07 April 2018",
    price: "79.49",
    quantity: "82",
  },
  {
    id: 6,
    title: "Marco Shoes",
    date: "05 March 2018",
    price: "28.49",
    quantity: "69",
  },
];

const MyProducts = () => {
  return (
    <>
      <div className=" card mb-3">
        {getCardHeader("My Products")}
        <div className=" card-body">
          <div
            className=" custom-scrollbar"
            style={{ maxWidth: "100%", overflow: "auto" }}
          >
            <table
              className="table table-hover table-centered my-color"
              style={{
                marginBottom: "0px",
                minWidth: "600px",
                overflow: "auto",
              }}
            >
              <thead className=" table-light">
                <tr className="" style={{ height: "4rem" }}>
                  <th className="">Product</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {MyProductsData.map((item) => {
                  return (
                    <tr key={item.id} className=" " style={{ height: "4rem" }}>
                      <td className="">
                        <div>{item.title}</div>
                        {/* <small className=" text-muted">{item.date}</small> */}
                      </td>
                      <td className=" ">
                        <div>${item.price}</div>
                        {/* <small className=" text-muted">Price</small> */}
                      </td>
                      <td className=" ">
                        <div className=" badge bg-primary">{item.quantity}</div>
                        {/* <small className=" text-muted">Quantity</small> */}
                      </td>
                      <td className=" ">
                        <div>${(item.quantity * item.price).toFixed(2)}</div>
                        {/* <small className=" text-muted">Amount </small> */}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProducts;
