import React from "react";
import getCardHeader from "../../../Shared/Extra/getCardHeader";
import PageTitleBreadcrumb from "../../../Shared/Extra/PageTitleBreadcrumb";
import Messeges from "./Messeges";
import SellerInformation from "./SellerInformation";
import OrdersVsRevenew from "./OrdersVsRevenew";
import MyProducts from "./MyProducts";

import { BsBasket3 } from "react-icons/bs";
import { CgBox } from "react-icons/cg";
import { IoDiamondOutline } from "react-icons/io5";

const ProfileWidgetData = [
  {
    id: 1,
    icon: <BsBasket3 />,
    title: "Order",
    amount: 1587,
    performance: +11,
  },
  {
    id: 2,
    icon: <CgBox />,
    title: "Revenew",
    amount: "$46,782",
    performance: -20,
  },
  {
    id: 3,
    icon: <IoDiamondOutline />,
    title: "Poducts Sold",
    amount: "1,890",
    performance: +89,
  },
];

const ProfileMainContent = () => {
  return (
    <div className=" full-size page-main">
      <div className=" main-content container-fluid w-100">
        <PageTitleBreadcrumb title="Profile" path="Profile" />
        {/* Profile Card */}
        <div className=" row mt-3 mb-3 ">
          <div className=" col-12">
            <div className=" card w-100  ">
              {/* <div className=" card-body bg-primary rounded-1 d-flex flex-column flex-md-row justify-content-between text-white"> */}
              <div className=" card-body  rounded-1 text-white bg-primary">
                <div className=" row">
                  <div className=" col-sm-8">
                    <div className=" d-flex h-100  align-items-center ">
                      <img
                        src="/images/users/avatar-1.jpg"
                        alt=""
                        className=" avatar-lg rounded-circle img-thumbnail"
                      />
                      <div className=" profile-info ps-4">
                        <h5>Nahean Fardous</h5>
                        <p className=" opacity-75 ">
                          <small> Authorised Brand Seller</small>
                        </p>
                        <div className=" d-flex flex-sm-column ">
                          <div className=" me-3">
                            <h5>$25600</h5>
                            <p className=" opacity-75 ">
                              <small> Total Revenew</small>
                            </p>
                          </div>
                          <div>
                            <h5>$25600</h5>
                            <p className=" mb-0 opacity-75">
                              <small> Number of order</small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" col-sm-4">
                    <div className=" h-100 w-100 d-flex align-items-center align-items-sm-start justify-content-center justify-content-sm-end">
                      <button className=" btn btn-light shadow-lg">
                        Edit Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" row ">
          <div className=" col-12 col-xl-4">
            <SellerInformation />

            <div className=" card mb-3">
              <div className=" card-body bg-primary bg-opacity-25 center p-5 rounded-3">
                <h3 className=" m-0 text-primary">Call Me: 01XXXXXXXX</h3>
              </div>
            </div>
            <Messeges />
          </div>
          <div className=" col-12 col-xl-8">
            <OrdersVsRevenew />

            {/* Widget row */}
            <div className=" row">
              {ProfileWidgetData.map((item) => {
                return (
                  <div className=" col-12 col-md-4" key={item.id}>
                    <div className=" card mb-3">
                      <div className=" card-body">
                        <div
                          className=" float-end  text-primary p-2 "
                          style={{ fontSize: "2rem" }}
                        >
                          {item.icon}
                        </div>
                        <h6 className=" text-muted">{item.title}</h6>
                        <h2 className=" text-primary">{item.amount}</h2>
                        <span
                          className={` badge ${
                            item.performance >= 0 ? "bg-success" : "bg-danger"
                          }`}
                        >
                          {item.performance}%
                        </span>
                        <span className=" text-muted">
                          {" "}
                          From previous period
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <MyProducts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMainContent;
