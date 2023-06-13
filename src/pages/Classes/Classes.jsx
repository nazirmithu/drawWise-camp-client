import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useSelectedClass from "../../components/hooks/useSelectedClass";


const Classes = ({ item }) => {
    const { _id, class_image, class_name, instructor_name, available_seats, price } = item;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useSelectedClass();


    const handleSelect = item => {
        console.log(item)
        if (user && user.email) {
            const selectedClass = { classId: _id, class_image, class_name, instructor_name, price, email: user.email }
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your selected class has been saved to your card list',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to select the class?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }


    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={class_image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Course Name: {class_name}</h2>
                <p className="font-semibold">Instructor Name: {instructor_name}</p>
                <p className="font-semibold">Available Seats: {available_seats}</p>
                <p className="font-semibold">Price: {price}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleSelect(item)} className="btn btn-outline btn-success">Select Course</button>
                </div>
            </div>
        </div>
    );
};

export default Classes;