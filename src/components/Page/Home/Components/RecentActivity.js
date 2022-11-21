import React from "react";
import RecentActivityData from "../../../Data/HomeRecentActivity";
const RecentActivity = () => {
  // console.log(RecentActivityData);
  return (
    <div className="card hm-recent-activity ">
      <div className="card-header bg-primary text-white">
        <h5>Recent Activity</h5>
      </div>
      <div
        className="card-body hm-recent-timeline-container custom-scrollbar-sm"
        style={{ minHeight: "450px", marginBottom: "10px" }}
      >
        <div className="timeline-dummy-item">
          <div className="timeline-dummy-line"></div>
        </div>
        {RecentActivityData.map((item) => {
          return (
            <div key={item.id} className=" timeline-item-wrapper">
              {item.id !== RecentActivityData.length && (
                <div className="timeline-line"></div>
              )}
              {item.color === "primary" && (
                <>
                  <div className="icon bg-primary">{item.icon}</div>
                  <div
                    className=" p-2 ct-hover rounded"
                    // style={{ backgroundColor: "red" }}
                  >
                    <small>
                      <h5>
                        <small className=" link-primary">{item.title}</small>
                      </h5>
                      <p>{item.msg}</p>
                      <p className=" text-muted">{item.time}</p>
                    </small>
                  </div>
                </>
              )}
              {item.color === "info" && (
                <>
                  <div className="icon bg-info">{item.icon}</div>

                  <div
                    className=" p-2 ct-hover rounded"
                    // style={{ backgroundColor: "red" }}
                  >
                    <small>
                      <h5>
                        <small className=" link-info">{item.title}</small>
                      </h5>
                      <p className=" mb-1">{item.msg}</p>
                      <p className=" text-muted">{item.time}</p>
                    </small>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentActivity;
