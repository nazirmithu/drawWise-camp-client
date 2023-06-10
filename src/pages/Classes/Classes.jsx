
const Classes = ({ item }) => {
    const { class_image, class_name, instructor_name, available_seats, price } = item;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={class_image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Course Name: {class_name}</h2>
                <p className="font-semibold">Instructor Name: {instructor_name}</p>
                <p className="font-semibold">Available Seats: {available_seats}</p>
                <p className="font-semibold">Price: {price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Select</button>
                </div>
            </div>
        </div>
    );
};

export default Classes;