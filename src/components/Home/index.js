import UserList from "../../utils/UserList"

const Home = () => {
    const data = UserList()
    console.log(data)

    return (
        <div>
            <h1>Hello Adnan</h1>
        </div>
    )
}

export default Home