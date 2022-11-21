import React from "react";
import PageTitleBreadcrumb from "../../../Shared/Extra/PageTitleBreadcrumb";

import { AiFillPrinter } from "react-icons/ai";

const InvoiceTableData = [
  {
    id: 1,
    type: "Laptop",
    product: `Brand Model VGN-TXN27N/B 11.1" Notebook PC`,
    quantity: 1,
    unitCost: 1799.0,
  },
  {
    id: 2,
    type: "	Warranty",
    product: `Two Year Extended Warranty - Parts and Labor`,
    quantity: 2,
    unitCost: 499.0,
  },
  {
    id: 2,
    type: "	LED",
    product: ` 80cm (32) HD Ready LED TV`,
    quantity: 5,
    unitCost: 412.0,
  },
];

const InvoiceMainContent = () => {
  return (
    <div className=" page-main invoice-page">
      <div className=" main-content container-fluid w-100">
        <PageTitleBreadcrumb title="Invoice" path="Invoice" />
        <div className=" card">
          <div className=" card-body">
            <div className=" d-flex justify-content-between align-items-center">
              <img
                src="/images/logo/logo.png"
                alt=""
                style={{ height: "2rem", width: "auto" }}
              />
              <h4>Invoice</h4>
            </div>
            <div className=" row mt-4">
              <div className=" col-12 col-sm-6">
                <p>
                  <strong>Hello, Copper Hobson</strong>
                </p>
                <p>
                  <small>
                    Please find below a cost-breakdown for the recent work
                    completed. Please make payment at your earliest convenience,
                    and do not hesitate to contact me with any questions.
                  </small>
                </p>
              </div>
              <div className=" col-12 col-sm-6 d-flex justify-content-end">
                <div className=" d-flex flex-column invoice-details-res">
                  <div className=" d-flex ">
                    <strong>Order Date:</strong>
                    <span className=" ms-2">Jan 17,2018</span>
                  </div>
                  <div className=" d-flex justify-content-between">
                    <strong>Order Status:</strong>
                    <span className=" badge bg-success">Paid</span>
                  </div>
                  <div className=" d-flex justify-content-between">
                    <strong>Order Id:</strong>
                    <span>#123456</span>
                  </div>
                </div>
              </div>
            </div>

            <div className=" row mt-4">
              <div className=" col-12 col-md-4">
                <div className=" d-flex flex-column">
                  <h6>Billing Address</h6>
                  <address>
                    Lynne K. Higby <br /> 795 Folsom Ave, Suite 600
                    <br /> San Francisco, CA 94107 <br />
                    <abbr title="phone">P:</abbr> (123) 456-7890
                  </address>
                </div>
              </div>
              <div className=" col-12 col-md-4">
                <div className=" d-flex flex-column">
                  <h6>Shipping Address</h6>
                  <address>
                    Lynne K. Higby <br /> 795 Folsom Ave, Suite 600
                    <br /> San Francisco, CA 94107 <br />
                    <abbr title="phone">P:</abbr> (123) 456-7890
                  </address>
                </div>
              </div>
              <div className=" col-12 col-md-4">
                <div className=" w-100 d-flex justify-content-md-end">
                  <img
                    src="https://coderthemes.com/hyper/saas/assets/images/barcode.png"
                    height="140"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className=" row mt-4">
              <div className=" col-12">
                <table className=" table table-hover table-centered my-color">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Item</th>
                      <th>Quantity</th>
                      <th>Unit Cost</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {InvoiceTableData.map((item) => {
                      return (
                        <tr>
                          <td>{item.id}</td>
                          <td>
                            <h6 className=" font-weight-bold">{item.type}</h6>
                            <p>{item.product}</p>
                          </td>
                          <td> {item.quantity}</td>
                          <td> ${item.unitCost}</td>
                          <td>${item.unitCost * item.quantity}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            <div className=" row mt-4">
              <div className=" col-12 col-sm-8">
                <h6>
                  <small className=" text-muted">Note:</small>
                </h6>
                <p className=" small">
                  All accounts are to be paid within 7 days from receipt of
                  invoice. To be paid by cheque or credit card or direct payment
                  online. If account is not paid within 7 days the credits
                  details supplied as confirmation of work undertaken will be
                  charged the agreed quoted fee noted above.
                </p>
              </div>
              <div className=" col-12 col-sm-4">
                <div className=" d-flex justify-content-end w-100">
                  <div className=" d-flex flex-column">
                    <div
                      className=" d-flex justify-content-between"
                      style={{ width: "250px" }}
                    >
                      <h5 className=" strong">Sub-total:</h5>
                      <h5 className=" text-muted">$41200</h5>
                    </div>
                    <div
                      className=" d-flex justify-content-between"
                      style={{ width: "250px" }}
                    >
                      <h5 className=" strong">Vat:</h5>
                      <h5 className=" text-muted">$41200</h5>
                    </div>
                    <div
                      className=" d-flex justify-content-end"
                      style={{ width: "250px" }}
                    >
                      <h2 className=" text-muted">$41200.23 USD</h2>
                    </div>
                    <div
                      className=" d-flex justify-content-end"
                      style={{ width: "250px" }}
                    >
                      <button className=" btn btn-primary text-white me-2 d-flex center">
                        <AiFillPrinter className=" me-2" />
                        Print
                      </button>
                      <button className=" btn btn-info text-white">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceMainContent;
