import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { Pencil, X } from "lucide-react";
// import Swal from 'sweetalert2';
import { BiPencil } from "react-icons/bi";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Users = () => {
  const initialUsers = useLoaderData();
  const [users, setUsers] = useState(initialUsers)

  const handleUserDelete = (id) => {
    console.log("handle button clicked");
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`https://espresso-emporium-server-one-iota.vercel.app/users/${id}`, {
          method:'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log('deleted user', data);
            if (data.deletedCount) {
              const remainingUsers = users.filter(user => user._id !== id);
            setUsers(remainingUsers)
               Swal.fire({
          title: "Deleted!",
          text: "User hasbeen Deleted",
          icon: "success",
        });
            }
        }) 
       
      }
    });
  };

  return (
    <div className="p-4 py-10">
      <Helmet>
        <title>
          Espresso Emporium | Users Management
        </title>
      </Helmet>
      <h2 className="text-3xl text-center font-bold mt-10">Total Availble Users: <span className="text-red-500">{users.length}</span></h2>
      <div className="mb-4">
        
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full border">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>@Email</th>
              <th>Gender</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user._id} className="hover">
                <td>{idx + 1}</td>
                <td className="flex items-center gap-2">
                  <img
                    src={user.photo}
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span>{user.name}</span>
                </td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.status}</td>
                <td className="flex gap-2">
                  <button className="bg-white p-2 rounded shadow hover:bg-gray-100">
                    <BiPencil className="w-4 h-4 text-purple-600" />
                  </button>
                  <button
                    onClick={() => handleUserDelete(user._id)}
                    className="bg-white p-2 rounded shadow hover:bg-gray-100"
                  >
                    <X className="w-4 h-4 text-purple-600" />
                  </button>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
