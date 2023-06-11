import { useQuery } from "@tanstack/react-query";
import { FaChalkboardTeacher, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PATCH',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Made admin',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    const handleMakeInstructor = id => {

    }

    return (
        <div className="w-full p-20">
            <h3 className="text-3xl font-semibold">{users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Make Admin</td>
                            <td>Make Instructor</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr
                                key={user._id}
                            >
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{
                                    user.role === 'admin' ? "admin" : <button onClick={() => { handleMakeAdmin(user._id) }} className="btn btn-ghost bg-orange-600 text-white"><FaUserShield /></button>
                                }</td>
                                <td>{
                                    user.role === 'instructor' ? 'instructor' : <button onClick={() => { handleMakeInstructor(user._id) }} className="btn btn-ghost bg-orange-600 text-white"><FaChalkboardTeacher></FaChalkboardTeacher></button>
                                }</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;