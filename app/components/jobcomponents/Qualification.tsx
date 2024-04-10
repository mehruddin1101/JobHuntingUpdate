import React from "react";
import PlaceHolder from "./PlaceHolder";
interface Qualification{
  batch:string
}
const Qualification:React.FC<Qualification> = ({batch}) => {
  return (
    <>
      <PlaceHolder text="Qualification" />
      <div className="pl-4 mt-4">
        <ul className="list-disc">
          <li style={{color:'black'}}>
            {batch}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Qualification;
