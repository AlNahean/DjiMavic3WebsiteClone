import React from "react";
import PageTitleBreadcrumb from "../../../Shared/Extra/PageTitleBreadcrumb";
import { BsPerson } from "react-icons/bs";

const PricigData = [
  {
    id: 1,
    icon: <BsPerson />,
    title: "PROFESSIONAL PACK",
    cost: 19,
    basis: "month",
    storage: 10,
    bandwidth: 500,
    domain: "NO",
    user: 1,
    isRecomended: false,
  },
  {
    id: 2,
    icon: <BsPerson />,
    title: "BUSINESS PACK",
    cost: 29,
    basis: "month",
    storage: 50,
    bandwidth: 900,
    domain: 2,
    user: 10,
    isRecomended: true,
  },
  {
    id: 3,
    icon: <BsPerson />,
    title: "ENTERPRISE PACK",
    cost: 39,
    basis: "month",
    storage: 100,
    bandwidth: "Unlimited",
    domain: 10,
    user: "Unlimited",
    isRecomended: false,
  },
];

const PricingMainContent = () => {
  return (
    <div className=" page-main">
      <div className=" main-content container-fluid w-100">
        <PageTitleBreadcrumb title="Pricing" path="Pricing" />
        <div className=" container">
          <div className=" row my-color">
            <div className=" col-12 w-100 center text-center flex-column">
              <h2 className=" text-primary">Our Plans and Pricing</h2>
              <p>
                We have plans and prices that fit your business perfectly. Make
                your client site a success with our products.
              </p>
            </div>
          </div>
          <div className=" row">
            {PricigData.map((item) => {
              return (
                <div className=" col-12 col-md-4 mb-4 mt-4">
                  <div
                    className=" card"
                    style={{ marginTop: item.isRecomended ? "0px" : "40px" }}
                  >
                    {item.isRecomended && (
                      <div className=" card-header bg-danger bg-opacity-25   center">
                        <h5 className=" text-danger m-0">Recomended</h5>
                      </div>
                    )}
                    <div className={`card-body `}>
                      {/* ${!item.isRecomended && "mt-4"} */}
                      <div className=" center flex-column">
                        <h5 className=" mt-4">{item.title}</h5>

                        <div
                          className=" rounded-circle  shadow-lg border border-1 border-primary center p-3 bg-primary bg-opacity-25 text-primary  m-4"
                          style={{ fontSize: "2rem" }}
                        >
                          {item.icon}
                        </div>

                        <h3 className=" m-4 text-muted">
                          ${item.cost}{" "}
                          <span className=" small text-muted">
                            /{item.basis}
                          </span>
                        </h3>
                        <p className=" m-4 text-muted">
                          {item.storage} GB Storage
                        </p>
                        <p className=" m-4 text-muted">
                          {item.bandwidth} GB Bandwidth
                        </p>
                        <p className=" m-4 text-muted">{item.domain} Domain</p>
                        <p className=" m-4 text-muted">{item.user} User</p>
                        <p className=" m-4 text-muted">Email Support</p>
                        <p className=" m-4 text-muted">24/7 Support</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingMainContent;
