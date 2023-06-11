import { FaTrashAlt, FaWallet } from "react-icons/fa";
import useSelectedClass from "../../../components/hooks/useSelectedClass";
import Swal from "sweetalert2";

const MyClasses = () => {
    const [cart, refetch] = useSelectedClass();
    console.log(cart);
    const total = cart.reduce((sum, item) => item.price + sum, 0);
    const price = parseFloat(total.toFixed(2))

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your Class has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className="w-full font-serif mt-20">
            <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
                <h3 className="text-2xl">Selected Class: {cart.length}</h3>
                <h3 className="text-2xl">Total Price: ${price}</h3>
            </div>
            <div className="overflow-x-auto p-4">
                <table className="table">
                    <thead className="bg-red-200 text-white text-md">
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Course Name</th>
                            <th>Price</th>
                            <th>Delete</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr
                                key={item._id}
                            >
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.class_image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>{item.class_name}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost text-red-600 btn-lg"><FaTrashAlt /></button>
                                </td>
                                <td>
                                    <button className="btn btn-ghost text-red-600 btn-lg"><FaWallet /></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;