"use client";
import axios from "axios";
import Link from "next/link";
import React, {useState} from "react";
import { useRouter } from "next/navigation";
import { toast} from "react-hot-toast";

export default function ProfilePage() {
    const router = useRouter();
    const [data, setData] = useState("nothing");

    const logout = async () => {   
        try {
           await  axios.get("/api/users/logout");
           toast.success("Logout Success");
           router.push("/login");
        } catch (error: any) {
            console.log(error.message);
            toast.error(error.message);
        }
        }

        const getUserDetails = async () => {
            try {
               const res = await axios.get("/api/users/me");
               console.log(res.data);
               setData(res.data.data._id);
                toast.success("User Details");
            } catch (error: any) {
                console.log(error.message);
                toast.error(error.message);
            }   
        }
    return (
        <div className="flex flex-col items-center justify-center  min-h-screen py-2" >
            <h1>Profile</h1>
            <hr />
            <p>Profile Page</p>
            <h2 className = "p-3 rounded bg-green-500">{data === 'nothing' ? "Nothing" : <Link href= {`/profile/${data}`}>
                {data}
            </Link> } </h2>
            < hr />
            <button 
            onClick={logout}
            className="p-2 bg-blue-500 mt-4  border border-gray-300 rounded-lg mb-4 focus:outline-none focus: border-gray-600 text-black">Logout</button>

           <button 
            onClick={getUserDetails}
            className="p-2 bg-purple-800 mt-4  border border-gray-300 rounded-lg mb-4 focus:outline-none focus: border-gray-600 text-black">GetUser Details</button>
        </div>
    )
}