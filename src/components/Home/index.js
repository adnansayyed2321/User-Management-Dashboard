import { useState } from "react"
import UserList from "../../utils/UserList"
import Header from "../Header"
import UserCard from "../UserCard"

const Home = () => {
    const [showPopup,setShowPopup] = useState(false)
    const {usersData,errorMsg} = UserList()
    const [formData,setFormData] =useState({
        name:"",
        email:"",
        company:"",
        website:""
    })
    // console.log(usersData) 

    const handelEditUser = (user) => {
        setShowPopup(true)
    }

    const handelInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    if (errorMsg){
        return(
            <div>
                <Header/>
                <p className="md:w-3/4 w-4/5 mx-auto flex flex-col items-center p-6">{errorMsg}</p>
            </div>
        )
    }

    return(
        <div className="bg-gradient-to-br from-purple-100 via-pink-50 to-indigo-100">
            <Header/>
            <div className="md:w-3/4 w-11/12 mx-auto flex flex-col pb-6">
                <button className="text-base md:text-lg self-end font-semibold flex items-center px-6 md:py-2 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full ">Add New User</button>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4   pt-4 ">
                    {usersData && (usersData.map((each)=>(<UserCard key={each.id} handelEditUser={handelEditUser} userDetails = {each}/>)))}
                </div>
            </div>
            { showPopup && 
                <div className="fixed inset-0 bg-black bg-opacity-50  flex items-center justify-center ">
                <div className="bg-white md:w-1/3 p-8 rounded-lg flex flex-col gap-5"> 
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Edit User</h1>
                    <form className="flex flex-col gap-3">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="newName" className="font-semibold">Name</label>
                            <input name="name" onChange={handelInputChange} id="newName" className="px-3 py-1 border-2 border-gray-400 rounded-lg" placeholder="Name"/>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="newEmail" className="font-semibold">Email</label>
                            <input name="email" onChange={handelInputChange} id="newEmail" className="px-3 py-1 border-2 border-gray-400 rounded-lg" placeholder="Email"/>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="newCompany" className="font-semibold">Company</label>
                            <input name="comapny" onChange={handelInputChange} id="newCompany" className="px-3 py-1 border-2 border-gray-400 rounded-lg" placeholder="Company"/>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="newWebsite" className="font-semibold">Website</label>
                            <input name="website" onChange={handelInputChange} id="newWebsite" className="px-3 py-1 border-2 border-gray-400 rounded-lg" placeholder="Website"/>
                        </div>
                    </form>
                    <div className="flex justify-end gap-6">
                        <button className="font-semibold text-gray-600">Cancel</button>
                        <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg ">Update User</button>
                    </div>
                </div>

            </div>
            }
            
        </div>
    )
}

export default Home