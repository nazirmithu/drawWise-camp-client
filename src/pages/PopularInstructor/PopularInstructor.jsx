import { Rotate } from "react-awesome-reveal";


const PopularInstructor = ({ instructor }) => {
    const { instructor_image, instructor_name, class_name } = instructor;

    return (
        <Rotate>
            <section>
                <div className="text-center">
                    <div className="avatar">
                        <div className="w-72 rounded-full ring ring-offset-base-100 ring-offset-2">
                            <img src={instructor_image} />
                        </div>
                    </div>
                    <div className="my-4">
                        <p>{instructor_name}</p>
                        <p>{class_name}</p>
                    </div>
                </div>
            </section>
        </Rotate>
    );
};

export default PopularInstructor;