import React from "react"
import { useParams } from "react-router-dom"

const Dashboard = () => {
    const {fullname} = useParams();
    return  (
        <>
        <h2 className="text-white">Welcome {fullname}</h2>
        </>
    )
}
export default Dashboard