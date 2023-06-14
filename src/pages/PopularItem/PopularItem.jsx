import { Zoom } from "react-awesome-reveal";


const PopularItem = ({ item }) => {
    const { class_name, class_image, price } = item;

    return (
        <Zoom>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={class_image} alt="" className="rounded-xl h-96" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Course Name: {class_name}</h2>
                    <p className="font-medium">Price: {price}</p>
                </div>
            </div>

        </Zoom>
    );
};

export default PopularItem;