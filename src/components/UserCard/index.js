const UserCard = ({userDetails}) => {

    const {name,id,email,company} = userDetails

    return (
        <div className="border-2 border-gray-600 rounded-lg px-4 py-2 md:text-base text-sm flex flex-col flex-wrap">
            <p>User Id : <span className="text-gray-600">{id}</span></p>
            <h1 >Name : <span className="text-gray-600 font-semibold">{name}</span></h1>
            <p>Email : <span className="text-gray-600">{email}</span></p>
            <p>Comapny : <span className="text-gray-600">{company.name}</span> </p>
            <div className="pt-2 flex justify-end gap-2">
                <button className="border-0 bg-gray-600 text-white text-sm py-1 px-4 rounded-md">Edit</button>
                <button className="text-sm border-2 py-0 px-4  border-gray-600 text-gray-600 bg-white rounded-md">Delete</button>
            </div>
        </div>
    )
}

export default UserCard