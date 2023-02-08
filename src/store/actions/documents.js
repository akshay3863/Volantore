import axios from "axios";
import cookie from "../../utils/cookie";

export const GET_ALL_DOCUMENTS = "get_all_documents"
export const getAllDocuments = () => {
   return (dispatch,getState) => {
       axios.get("/client/all_documents")
           .then((response) =>{
               // console.log(response.data)
           }).catch((err)=>{
           // console.log(err)
       })
   }
}
