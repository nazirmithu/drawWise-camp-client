import useData from "../../components/hooks/useData";
import PopularInstructor from "../PopularInstructor/PopularInstructor";

const PopularInstructors = () => {
    const [allData] = useData();

    return (
        <div>
            <p className="text-3xl font-bold text-center p-8 mt-20 underline">Popular Instructors</p>
            <p className="text-center mb-16">Our Instructors is  dynamic and talented drawing teacher with a passion for nurturing creativity in students. With a background <br /> in both fine arts and education, Mark has a deep understanding of artistic techniques and pedagogy.Our Instructors classes are <br /> known for their engaging and interactive nature, they are believes in fostering a supportive and collaborative learning environment.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    allData.slice(0, 6).map(instructor => <PopularInstructor
                        key={instructor._id}
                        instructor={instructor}
                    ></PopularInstructor>)
                }
            </div>
        </div>
    );
};

export default PopularInstructors;