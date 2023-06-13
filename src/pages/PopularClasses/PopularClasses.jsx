import PopularItem from "../PopularItem/PopularItem";
import useData from "../../components/hooks/useData";
import { Link } from "react-router-dom";

const PopularClasses = () => {
    const [popularData] = useData();

    return (
        <div className=" text-center">
            <p className="text-3xl font-bold text-center p-8 mt-20 mb-8 underline">Popular Classes</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    popularData.slice(0, 6).map(item => <PopularItem
                        key={item._id}
                        item={item}
                    ></PopularItem>)
                }
            </div>
            <Link to='/allclasses'><button  className="btn btn-outline btn-success mt-8">View More Classes</button></Link>
            
        </div>
    );
};

export default PopularClasses;