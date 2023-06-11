
const PopularInstructor = ({ instructor }) => {
    const { image, name, class_name } = instructor;

    return (
        <section>
            <div className="text-center">
                <div className="avatar">
                    <div className="w-72 rounded-full ring ring-offset-base-100 ring-offset-2">
                        <img src={image} />
                    </div>
                </div>
                <div className="my-4">
                    <p>{name}</p>
                    <p>{class_name}</p>
                </div>
            </div>
        </section>
    );
};

export default PopularInstructor;