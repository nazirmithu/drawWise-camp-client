import { FaTrashAlt, FaWallet } from "react-icons/fa";
import useSelectedClass from "../../../components/hooks/useSelectedClass";

const MyClasses = () => {
    const [cart] = useSelectedClass();
    console.log(cart);
    const total = cart.reduce((sum, item) => item.price + sum, 0)
    return (
        <div className="w-full p-4 font-serif mt-20">
            <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
                <h3 className="text-2xl">Selected Class: {cart.length}</h3>
                <h3 className="text-2xl">Total Price: ${total}</h3>
            </div>
            <div className="overflow-x-auto p-4">
                <table className="table">
                    {/* head */}
                    <thead>
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
                                    <button className="btn btn-ghost text-red-600 btn-lg"><FaTrashAlt /></button>
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