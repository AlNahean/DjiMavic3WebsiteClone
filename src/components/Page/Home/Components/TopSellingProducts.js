import React from "react";
import TopSellingProductsData from "../../../Data/HomeTopSellingProducts";

const TopSellingProducts = () => {
  // console.log(TopSellingProductsData);
  return (
    <div className="card hm-top-selling-products">
      <div className="card-header bg-primary text-white">
        <h5>Top Selling Product</h5>
      </div>
      <div
        className="card-body  d-flex justify-content-center align-content-center"
        style={{ minHeight: "460px" }}
      >
        <table className="table table-hover" style={{ marginBottom: "0px" }}>
          <tbody>
            {TopSellingProductsData.map((item) => {
              return (
                <tr key={item.id}>
                  <td className="text-center">
                    <div>{item.title}</div>
                    <small className=" text-muted">{item.date}</small>
                  </td>
                  <td className=" ">
                    <div>${item.price}</div>
                    <small className=" text-muted">Price</small>
                  </td>
                  <td className=" ">
                    <div>{item.quantity}</div>
                    <small className=" text-muted">Quantity</small>
                  </td>
                  <td className=" ">
                    <div>${(item.quantity * item.price).toFixed(2)}</div>
                    <small className=" text-muted">Amount </small>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopSellingProducts;
