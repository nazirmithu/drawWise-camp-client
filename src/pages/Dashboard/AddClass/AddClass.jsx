import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../providers/AuthProvider';
import useAxiosSecure from '../../../components/hooks/useAxiosSecure';
import Swal from 'sweetalert2';


const AddClass = () => {
    const [axiosSecure] = useAxiosSecure()
    const { user } = useContext(AuthContext);
    const { register, handleSubmit ,reset} = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_Image_Upload_Token}`

    const onSubmit = data => {
        const formData = new FormData()
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success) {
                    const imgURL = imageData.data.display_url;
                    const { available_seats, class_name, instructor_email, price, instructor_name } = data;
                    const newClass = { available_seats: parseFloat(available_seats), class_name, instructor_email, instructor_name, price: parseFloat(price), class_image: imgURL, status: 'pending' }
                    console.log(newClass)
                    axiosSecure.post('/allData', newClass)
                        .then(data => {
                            console.log('posting new class', data.data);
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'New class has been added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })
    };


    return (
        <div>
            <h2 className="text-4xl font-serif mb-20 text-center">Add New Class</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='p-8 border rounded-2xl shadow-lg ml-10'>

                <input className="mb-2 input input-bordered "
                    {...register("class_name", { required: true })}
                    type="text"
                    placeholder="Class Name"
                />

                <input className="mb-2 input input-bordered"
                    {...register("available_seats", { required: true })}
                    type="number"
                    placeholder="Available seats"
                />

                <input className="input input-bordered "
                    {...register("instructor_name", { required: true })}
                    type="text"
                    value={user?.displayName}
                    placeholder="Instructor Name" />

                <input className="mb-2 input input-bordered"
                    {...register("instructor_email")}
                    type="email"
                    value={user?.email}
                    placeholder="Instructor Email"
                />

                <input className="mb-2 input input-bordered"
                    {...register("price", { required: true })}
                    defaultValue="" {...register("price", { required: true })}
                    type="number"
                    placeholder="Price"
                />

                <input type="file"
                    {...register("image", { required: true })}
                    className="file-input file-input-bordered file-input-success w-full max-w-xs"
                />

                <input type="submit" value="Add Class" className="btn btn-block  btn-success mt-8" />
            </form>
        </div>
    );
};

export default AddClass;