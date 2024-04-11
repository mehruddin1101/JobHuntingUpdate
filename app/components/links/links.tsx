"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Link {}

const Links = () => {
  const [links, setLinks] = useState([]);



  const getAllLinks = async () => {
    try {
      const data = await fetch(
        "https://developnators.azurewebsites.net/api/JobHunting/GetAllJobs"
      );
      const response = await data.json();
      console.log(response)
      setLinks(response);
    } catch (error) {
      console.error("Error fetching links:", error);
    }
  };

  useEffect(() => {
    getAllLinks();
  }, []);

  return (
    <div>
      <div className="links-container">
        <div className="card-data"></div>

        <div className="card-data-10"></div>

        <div className="card-data-20"></div>

        <div className="links-wrapper card-data-links">
          {links.map((res: any, index) => {
            return (
              <div style={{ display: "flex", padding:'1rem'}} key={index}>
                <a className="mt-0 " href={res.appyLink}>
                  
                  <span style={{ color: "blue", overflow: "hidden" }}>
                    {res.postTitle}
                  </span>{" "}
                </a>
              </div >
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Links;
