import { useState } from "react"
import UserList from "../../utils/UserList"
import Header from "../Header"
import UserCard from "../UserCard"
import { updateUserDetails } from "../../utils/updateUserDetails"
import Shimmer from "../Shimmer"

const Home = () => {
    const [showPopup,setShowPopup] = useState(false)
    const {usersData,errorMsg,setUsersData} = UserList()
    const [udpateDataError,setUpdateDataError] = useState("")
    const [showLoaderOnUpdate,setShowLoaderOnupdate] = useState(false)
    const [formData,setFormData] =useState({
        name:"",
        email:"",
        companyName:"",
        website:"",
        id:""
    })
    // console.log(usersData) 

    const handelEditUser = (user) => {
        const {name,website,email,companyName,id} = user
        console.log(user)
        setFormData({
            name: name,          
            email: email,        
            companyName: companyName,    
            website: website ,
            id:id  
        });
        setShowPopup(true)
    }

    const handelInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const onUpadteAndSaveChanges = async(e) =>{
        e.preventDefault()
        setUpdateDataError("")
        setShowLoaderOnupdate(true)
        try{
            const resp = await updateUserDetails(formData.id,formData)
            if(resp.status){
            const newList = usersData.map((e)=> formData.id === e.id ? {...e,...formData}:e)
            setShowLoaderOnupdate(false)
            setUsersData(newList)
            setShowPopup(false)
            setFormData({name:"",
                email:"",
                companyName:"",
                website:"",
                id:""})}
        }catch(error){
            setShowLoaderOnupdate(false)
            setUpdateDataError(error.message)
        }
    }

    const onCanceledit = () => {
        setFormData({name:"",
            email:"",
            companyName:"",
            website:"",
            id:""})
        setShowPopup(false)
    }

    if (errorMsg){
        return(
            <div>
                <Header/>
                <p className="md:w-3/4 w-4/5 mx-auto text-red-600 font-semibold text-center p-6">{errorMsg}</p>
            </div>
        )
    }

    return(
        <div className="bg-gradient-to-br from-purple-100 via-pink-50 to-indigo-100">
            <Header/>
            <div className="md:w-3/4 w-11/12 mx-auto flex flex-col pb-6">
                <button className="text-base md:text-lg self-end font-semibold flex items-center px-6 md:py-2 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full ">Add New User</button>
                
                {usersData ? <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4">
                    {(usersData.map((each)=>(<UserCard key={each.id} handelEditUser={handelEditUser} userDetails = {each}/>)))}
                </div>: <Shimmer/>}
            </div>
            { showPopup && 
                <div className="fixed inset-0 bg-black bg-opacity-50  flex items-center justify-center ">
                <div className="bg-white md:w-1/3 p-8 rounded-lg flex flex-col gap-5"> 
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Edit User</h1>
                    <form className="flex flex-col gap-3" onSubmit={onUpadteAndSaveChanges}>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="newName" className="font-semibold">Name</label>
                            <input required name="name" value={formData.name} onChange={handelInputChange} id="newName" className="px-3 py-1 border-2 border-gray-400 rounded-lg" placeholder="Name"/>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="newEmail" className="font-semibold">Email</label>
                            <input type="email" required name="email" value={formData.email} onChange={handelInputChange} id="newEmail" className="px-3 py-1 border-2 border-gray-400 rounded-lg" placeholder="Email"/>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="newCompany" className="font-semibold">Company</label>
                            <input required name="companyName" value={formData.companyName} onChange={handelInputChange} id="newCompany" className="px-3 py-1 border-2 border-gray-400 rounded-lg" placeholder="Company"/>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="newWebsite" className="font-semibold">Website</label>
                            <input required name="website" value={formData.website} onChange={handelInputChange} id="newWebsite" className="px-3 py-1 border-2 border-gray-400 rounded-lg" placeholder="Website"/>
                        </div>
                        <div className="flex justify-end gap-6 pt-4">
                            <button onClick={onCanceledit} className="font-semibold text-gray-600">Cancel</button>
                            <button type="submit" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg ">Update User</button>
                        </div>
                    </form>
                    
                    {udpateDataError && <p className="text-red-600 font-semibold text-center">{udpateDataError}</p>}
                    {showLoaderOnUpdate && <p className="text-blue-600 font-semibold text-center">Please Wait ...</p>}
                </div>

            </div>
            }
            
        </div>
    )
}

export default Home