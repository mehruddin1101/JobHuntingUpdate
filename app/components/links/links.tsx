import Link from "next/link";
import React, { useEffect, useState } from "react";
import DevelopNators from "../../../public/developnators1.png"; // Correct image import path



const Links = () => {
  const [links, setLinks] = useState([]);

  const getAllLinks = async () => {
    try {
      const data = await fetch(
        "https://developnators.azurewebsites.net/api/JobHunting/GetAllJobs"
      );
      const response = await data.json();
      console.log(response);
      setLinks(response);
    } catch (error) {
      console.error("Error fetching links:", error);
    }
  };

  useEffect(() => {
    getAllLinks();
  }, []);

  return (
    <div className="mt-10">
      <div className="links-container">
        <div className="card-data"></div>

        <div className="card-data-10" style={{ backgroundColor: 'black', color: 'white', textAlign: 'center' }}>
          <div style={{padding:"5px"}}>
         <h1 style={{fontWeight:'400'}}>Our Training Program</h1>
         <hr/>

          </div>
          <a target="_blank" href = "https://developnator.web.app/" >
  <img
    style={{ objectFit: 'contain', width: '100%', height: '100%', display: 'block', margin: '0 auto' }}
    src={DevelopNators.src}
    alt="DevelopNators"
  />
   </a>
</div>



        <div className="card-data-20"></div>

        <div className="links-wrapper card-data-links " >
          {links.map((res: any, index) => {
            return (
              <div style={{ display: "flex" }} key={index}>
                <a style={{ padding: "2rem" }} className="mt-0 " href={res.appyLink}>
                  <span style={{ color: "blue", overflow: "hidden", marginTop: "-10px" }}>
                    {res.postTitle}
                  </span>{" "}
                  <hr />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Links;
