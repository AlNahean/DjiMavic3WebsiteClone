import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Custom from "./Styles/NavGroup/Custom";
<li className="">
  <Link to="" className="card-section-grid text-decoration-none">
    <div></div>
    <div>
      <small>Analytics</small>
    </div>

    <small>
      <span className="badge bg-danger center">New</span>
    </small>
  </Link>
</li>;
// Array format
let dashboardLeftNavDataArray = [
  {
    title: "",
  },
];
//Object format
let dashboardLeftNavDataObject = {
  navigation: {
    title: "",
  },
};
let leftNavDashboardData = [
  {
    id: 1,
    title: "Analitics",
    link: "analytics",
    isNew: false,
  },
  {
    id: 2,
    title: "E-commerse",
    link: "e-commerse",
    isNew: false,
  },
  {
    id: 3,
    title: "Projects",
    link: "projects",
    isNew: false,
  },
  {
    id: 4,
    title: "E-wallet",
    link: "e-wallet",
    isNew: true,
  },
];
let leftNavPageData = [
  {
    id: 1,
    title: "Profile",
    link: "page-group/profile",
    isNew: false,
  },
  {
    id: 2,
    title: "Profile 2",
    link: "page-group/profile-2",
    isNew: false,
  },
  {
    id: 3,
    title: "Invoice",
    link: "page-group/invoice",
    isNew: false,
  },
  {
    id: 4,
    title: "FAQ",
    link: "page-group/faq",
    isNew: false,
  },
  {
    id: 5,
    title: "Pricing",
    link: "page-group/pricing",
    isNew: false,
  },
  {
    id: 6,
    title: "Maintainance",
    link: "page-group/maintainance",
    isNew: false,
  },
  {
    id: 7,
    title: "Starter",
    link: "page-group/starter",
    isNew: false,
  },
  // {
  //   id: 8,
  //   title: "Timeline",
  //   link: "page-group/timeline",
  //   isNew: false,
  // },
  {
    id: 9,
    title: "Landing",
    link: "page-group/landing",
    isNew: false,
  },
];
let leftNavEcommerseData = [
  {
    id: 1,
    title: "Products",
    link: "ecommerse-group/products",
    isNew: false,
  },
  {
    id: 2,
    title: "Product Details",
    link: "ecommerse-group/product-details",
    isNew: false,
  },
  {
    id: 3,
    title: "Orders",
    link: "ecommerse-group/orders",
    isNew: false,
  },
  {
    id: 4,
    title: "Order Details",
    link: "ecommerse-group/order-details",
    isNew: false,
  },
  {
    id: 5,
    title: "Customers",
    link: "ecommerse-group/customers",
    isNew: false,
  },
  {
    id: 6,
    title: "Shoping Cart",
    link: "ecommerse-group/shoping-cart",
    isNew: false,
  },
  {
    id: 7,
    title: "Checkout",
    link: "ecommerse-group/checkout",
    isNew: false,
  },
  {
    id: 8,
    title: "Sellers",
    link: "ecommerse-group/sellers",
    isNew: false,
  },
];

const FullLeftNav = () => {
  const [showPageNavDashboard, setShowPageNavDashboard] = useState(true);
  const [showPageNavPages, setShowPageNavPages] = useState(true);
  const [showPageNavEcommerse, setShowPageNavEcommerse] = useState(true);
  return (
    <>
      <div className="dummy-left-nav">
        <div className="full-left-nav">
          <div className="card h-100 w-100 ">
            {/* Page Header */}
            <Link
              to={"/"}
              className="card-header bg-primary"
              style={{ height: "70px", textDecoration: "none" }}
            >
              <img src="/images/logo/logo.png" alt="" />
            </Link>
            <div className="card-body left-nav-item overflow-auto custom-scrollbar-sm">
              {/**********************************************************************************************************
               ***************************************Navigation********************************************
               ***********************************************************************************************************/}
              <div className=" d-flex flex-column w-100">
                <h5>
                  <small>{"Navigation".toUpperCase()}</small>
                </h5>
                {/* NavGroupSwitcher----Dashboard */}
                <div
                  className="card-section-grid collapse-header p-2"
                  onClick={() => {
                    setShowPageNavDashboard(!showPageNavDashboard);
                  }}
                >
                  <div className="center" style={{ fontSize: "1.2rem" }}>
                    <AiOutlineHome />
                  </div>
                  <h5 className=" mb-0">Dashboard</h5>
                  <span
                    className=" badge bg-success"
                    // style={{ marginBottom: "0px" }}
                  >
                    4
                  </span>
                </div>

                {/* NavGroupItems-- */}
                {showPageNavDashboard && (
                  <ul className=" list-unstyled left-nav-collapse text-muted">
                    {leftNavDashboardData.map((item) => {
                      return (
                        <li className=" " key={item.id}>
                          <Link
                            to={`/${item.link}`}
                            className="card-section-grid text-decoration-none ct-hover"
                            onClick={() => {}}
                          >
                            <div></div>
                            <div>
                              <h5>
                                <small>{item.title}</small>
                              </h5>
                            </div>
                            <span className=" badge bg-danger center">
                              {item.isNew && "New"}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
              {/**********************************************************************************************************
               ***************************************Custom********************************************
               ***********************************************************************************************************/}
              <Custom
                isHeader={true}
                groupSectionHeader={"Apps"}
                groupHeader={"Pages"}
                showNavGroup={showPageNavPages}
                setShowNavGroup={setShowPageNavPages}
                leftNavData={leftNavPageData}
              />
              {/* <Custom
                isHeader={false}
                groupSectionHeader={"Apps"}
                groupHeader={"Ecommerse"}
                showNavGroup={showPageNavEcommerse}
                setShowNavGroup={setShowPageNavEcommerse}
                leftNavData={leftNavEcommerseData}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullLeftNav;
