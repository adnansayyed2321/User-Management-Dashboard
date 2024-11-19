import { useState } from "react"
import { updateUserDetails } from "../../utils/updateUserDetails"

const UserCard = ({userDetails}) => {
    const [editing,setEditing] = useState(false)
    const {name,id,email,company} = userDetails
    const [putResponse,setPutResponse] = useState("")
    
    const [details,setDetails] = useState({
        id,name,email,companyName:company.name
    })

    const handleEdit = () => {
        editing ? setEditing(false) : setEditing(true)
    }

    const handleSave = async () => {
        setPutResponse("Please wait !!!")
        try{
            const resp = await updateUserDetails(details.id,details)
            if(resp.status === 200){
                setPutResponse("Successfully Update")
            }
            editing ? setEditing(false) : setEditing(true)
        }catch(error){
            setPutResponse(error.message)
        }

        setTimeout(() => {
            setPutResponse("");
        }, 3000);
    }

    const handleChange = (e) => {
        const {name,value} = e.target
        setDetails((prev)=>({...prev,[name]:value}))
    }

    return (
        <div className="border-2 border-gray-600 rounded-lg px-4 py-2 md:text-base text-sm flex flex-col gap-1">
            <p >User Id : <span className="text-gray-600">{userDetails.id}</span></p> 
            <h1>Name : {
                editing ? <input name="name" value={details.name} onChange={handleChange} className="border-2 border-gray-600 px-2 rounded-md"/> : 
                <span className="text-gray-600 font-semibold">{details.name}</span>
            } </h1>
            <p>Email : {
                editing ? <input name="email" value={details.email} onChange={handleChange} className="border-2 border-gray-600 px-2 rounded-md"/> : 
                <span className="text-gray-600">{details.email}</span>
            }</p>
            <p>Comapny : {
                editing ? <input name="companyName" value={details.companyName} onChange={handleChange} className="border-2 border-gray-600 px-2 rounded-md"/> : 
                <span className="text-gray-600">{details.companyName}</span>
            } </p>
            <div className="pt-2 flex justify-end gap-2">
                {!editing && <button onClick={handleEdit} className="border-0 bg-gray-600 text-white text-sm py-1 px-4 rounded-md">Edit</button>}
                {editing && <button onClick={handleSave} className="border-0 bg-gray-600 text-white text-sm py-1 px-4 rounded-md">Save</button>}
                <button className="text-sm border-2 py-0 px-4  border-gray-600 text-gray-600 bg-white rounded-md">Delete</button>
            </div>
            {putResponse && <p>{putResponse}</p>}
        </div>
    )
}

export default UserCard