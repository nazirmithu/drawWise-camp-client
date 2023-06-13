import useData from "../../../components/hooks/useData";
import { FcApproval, FcDisapprove, FcFeedback } from "react-icons/fc";
const ManageClass = () => {
    const [allData] = useData();

    return (
        <div>
            <h2 className="text-3xl font-serif my-8 text-center">Manage All Class</h2>
            <div className="overflow-x-auto ">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Approve</th>
                            <th>Deny</th>
                            <th>Send Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allData.map((item, index) => <tr key={item._id}>

                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.class_image} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.class_name}
                                </td>
                                <td>{item.instructor_name}</td>
                                <td>{item.instructor_email}</td>
                                <td>{item.available_seats}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button className="btn btn-ghost btn-lg"><FcApproval /></button>
                                </td>
                                <td>
                                    <button className="btn btn-ghost btn-lg"><FcDisapprove /></button>
                                </td>
                                <td>
                                    <button className="btn btn-ghost btn-lg"><FcFeedback /></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageClass;