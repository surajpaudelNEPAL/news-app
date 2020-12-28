import React,{useState,useEffect} from 'react';
import "./home.css"
import axios from "axios";
import imgnotfound from "../image/noimgfound.jpg";

const Home=()=>
{
    const [data,setData]=useState([]);
    const [loading,setIsLoading]=useState(false);

    useEffect(()=>{
  async function fetchData()
  {   const req= await axios.get("https://api.nytimes.com/svc/topstories/v2/world.json?api-key=7cXTYDLIrpGraVSqlJa5BnXzl891EFJG");
      setIsLoading(false);
      setData(req.data.results)
}
    fetchData();
  },[]);
    console.table(data);
  return(
    <div className="title">
    <h2 style={{color:"white",marginLeft:"1rem"}}>Treanding Now</h2>
      <div className="main">
    { !loading? data.slice(0,3).map((items,index)=>{
        index++;
        return(
           <div className={`item-${index}`} key={items.url}>
     
            <img src={items?.multimedia[0].url||imgnotfound} alt="randompic" />
      
           <div className="news-text">
           <p>{items.title}</p>
            <a  href={items.url} className="item-link">read full story </a>
           </div>
           
            </div>
            ) }) : "loading..."}
        </div>        
  </div>
   
   );
  
}
export default Home;
