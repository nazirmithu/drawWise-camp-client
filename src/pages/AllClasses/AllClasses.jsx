import useData from "../../components/hooks/useData";
import Classes from "../Classes/Classes";
import classImg1 from '../../assets/class-1.jpg';

const AllClasses = () => {
    const [popularData] = useData();

    return (
        <div>
            <img className="h-96 w-full" src={classImg1} alt="" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">
                {
                    popularData.map(item => <Classes
                        key={item._id}
                        item={item}
                    ></Classes>)
                }
            </div>
        </div>
    );
};

export default AllClasses;