import axios from "axios";
export default axios.create({
  baseUrl:"https://api.nytimes.com/svc/topstories/v2",  
});