import UserList from "../../utils/UserList"
import Header from "../Header"
import UserCard from "../UserCard"

const Home = () => {
    const {usersData,errorMsg} = UserList()
    console.log(usersData)

    if (errorMsg){
        return(
            <div>
                <Header/>
                <p className="md:w-3/4 w-4/5 mx-auto flex flex-col items-center p-6">{errorMsg}</p>
            </div>
        )
    }

    return(
        <div>
            <Header/>
            <div className="md:w-3/4 w-4/5 mx-auto flex flex-col pb-6">
                <button className="self-end mt-4 md:text-base text-sm border-2 md:py-1 py-0 px-4  border-gray-600 text-gray-600 bg-white rounded-md">Add New User</button>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4   pt-4 ">
                    {usersData && (usersData.map((each)=>(<UserCard key={each.id} userDetails = {each}/>)))}
                </div>
            </div>
        </div>
    )
}

export default Home