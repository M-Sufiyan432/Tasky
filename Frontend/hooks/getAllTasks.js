// import axios from "axios"
// import { serverUrl } from "../src/App"
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { setTaskData } from "../redux/taskSlice";
import api from "../src/api/axios";

function useGetAllTask (){
    const {userData} = useSelector(state => state.user);
    const disptach = useDispatch();
    useEffect(()=>{
        const fetchTask = async()=>{
            if(!userData) return ;
           try {
            const res = await api.get(`/api/task/getAllTask`,{withCredentials:true})
            disptach(setTaskData(res.data.task))
            console.log("get All Task Data",res);
            
           } catch (error) {
            console.log("getAllTask error ",error);
            
           }
        }
        fetchTask();
    },[userData])
}
export default useGetAllTask;