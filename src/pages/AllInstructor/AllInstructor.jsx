import useData from "../../components/hooks/useData";
import img from '../../assets/class-2.jpg';

const AllInstructor = () => {
    const [allData] = useData();

    return (
        <div>
            <img className="h-96 w-full" src={img} alt="" />
            <h2 className="m-20 font-serif text-5xl text-center">All Instructor</h2>
            <div className="overflow-x-auto">
                <table className="table">

                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Instructor Image</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allData.map((instructor, index) => <tr key={instructor._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={instructor.instructor_image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold"></div>
                                        </div>
                                    </div>
                                </td>
                                <td>{instructor.instructor_name}</td>
                                <td>{instructor.instructor_email}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllInstructor;