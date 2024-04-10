"use client";
import {   useEffect, useState } from "react";
import Head from "next/head";
import Links from "../components/links/links";
import Link from "next/link";
const  HomePage =() => {
  // State to track the current page
  const [currentPage, setCurrentPage] = useState(1);
  const [loding, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

 const getAllJobs = async () =>  {
    try {
      const response = await fetch('https://developnators.azurewebsites.net/api/JobHunting/GetAllJobs');
      if (!response.ok) {
        throw new Error('Failed to fetch jobs');
      }
      const data = await response.json();
      setJobs(data)
      setLoading(false)
     
    } catch (error) {
      console.error('Error fetching jobs:', error);
      return null;
    }
  }
  useEffect(()=>{
    getAllJobs()
  },[])

  // Function to handle next page
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

 
  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  //   data-theme="light"
  return (
    <div style={{ backgroundColor: "#F7F8F9" }}>
      {loding ? (
        <div className="skeleton-loading" >

        <div className="flex skeleton-loading-card "  >
              <div className="flex flex-col gap-4"  >
              </div>
            <div className="skeleton h-32 w-full"  style={{height:'40vh'}}></div>
        </div>

        <div className="flex flex-col gap-4 w-52 skeleton-loading-card "  >

            <div className="flex flex-col ">
             </div>
          <div className="skeleton h-32 w-full " style={{height:'40vh'}}></div>
        </div>

        <div className="flex flex-col gap-4 w-52  skeleton-loading-card"  >

          <div className="flex flex-col gap-4">
          </div>
          <div className="skeleton h-32 w-full"  style={{height:'40vh'}}></div>
        </div>


          </div>

      ) : (
        <div style={{ backgroundColor: "#F7F8F9" }}>
          <p style={{ textAlign: "center", color: "red", fontSize: "1.6rem" }}>
            <a
              target="_blank"
              href="https://techfynder.com/Fresher-jobs-in-India"
            >
             
              <h1>
               
                Top mncs are Hiring{" "}
                <b style={{ marginLeft: "20px" }}>
                
                  find the Fresheres job in india
                </b>
              </h1>
            </a>
          </p>
          <div className="home-container">
            <div className="card-style ">
              {
                jobs.map((data: any)=>{
                 return (
                  <div className="card card-side bg-base-100 shadow-x mt-10" data-theme="light">
                  <figure >
                    /* eslint-disable @next/next/no-img-element */
                    <img
                      src={data.cardPhoto}
                      alt="Movie"
                      style={{  height:'30vh', maxHeight:'100%' }}
                    />
                  /* eslint-enable @next/next/no-img-element */
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title"> {data.postTitle} </h2>
                    <p> {data.qualification} </p>
                    <div className="card-actions justify-end">
                      <Link href ={`/job/${data.jobId}`} >   <button className="btn btn-primary">more</button></Link> 
                    </div>
                  </div>
                </div>
                
                 )
                })
              }
            </div>

            <div className="home-linkStyle">
              <Links />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default HomePage;