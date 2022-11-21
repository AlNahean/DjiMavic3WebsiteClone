import React from "react";

const PageTitleBreadcrumb = ({ title = "Title", path = "Path" }) => {
  return (
    <div className="page-title-box mt-4 mb-4">
      <h4 className="page-title">{title}</h4>
      <div className=" d-none d-md-flex breadcrumb">
        <li className=" breadcrumb-item">
          <a href="#" className=" text-decoration-none">
            Hyper
          </a>
        </li>
        <li className=" breadcrumb-item">
          <a href="#" className=" text-decoration-none">
            Pages
          </a>
        </li>
        <li className=" breadcrumb-item active">{path}</li>
      </div>
    </div>
  );
};

export default PageTitleBreadcrumb;
