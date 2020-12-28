import React, { useState, useEffect } from "react";
import "./topHeading.css";
import axios from "axios";
import imgnotfound from "../image/noimgfound.jpg";


const TestApi = ({endpoint}) => {
  const [data, setData] = useState([]);
  const [loading, setIsLoading] = useState(true);


  useEffect(() => {
    async function fetchData()
    {
      const url= await axios.get(`https://api.nytimes.com/svc/topstories/v2${endpoint}`);
      console.log(url);
      setData(url.data.results);
      setIsLoading(false);
    }
fetchData();
  },[endpoint])
console.log(data);

 return (
  <div className="headline-container">
      { !loading? data.slice(0,6).map((items)=>{
      
       return(
          <div className="headline-items"  key={items.url}>
          <img src={items?.multimedia[0].url||imgnotfound} alt="randompic" className="images" />
          <div className="item-text">
          <p>{items.title}</p>
           <br/>
           <a  rel="noopener noreferrer" href={items.url} 
            className="item-link"
            onClick={()=>{window.location.assign(items.url)}}>read full story </a>
          </div>
          </div>
           ) }) :"Loading..." }
           
 </div>
  );
};
export default TestApi;