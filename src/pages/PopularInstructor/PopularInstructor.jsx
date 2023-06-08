
const PopularInstructor = ({ instructor }) => {
    const { instructor_image, instructor_name, class_name } = instructor;

    return (
        <section>
            <div className="text-center">
                <div className="avatar">
                    <div className="w-72 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={instructor_image} />
                    </div>
                </div>
                <div className="my-4">
                    <p>{instructor_name}</p>
                    <p>{class_name}</p>
                </div>
            </div>
        </section>
    );
};

export default PopularInstructor;