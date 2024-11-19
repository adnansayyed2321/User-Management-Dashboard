import { useEffect, useState } from "react";
import { USERS_API } from "./constants";
import axios from "axios";

const UserList = () => {
    const [usersData,setUsersData] = useState()

    useEffect(()=>{
        const fetchData =  async() =>{
            try{
                const response = await axios.get(USERS_API)
                setUsersData(response.data)
            }catch(error){
                console.log(error.message)
            }
        }

        fetchData()
    },[])

    return usersData
}

export default UserList