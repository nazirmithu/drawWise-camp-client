import PopularItem from "../PopularItem/PopularItem";
import useData from "../../components/hooks/useData";

const PopularClasses = () => {
    const [popularData]= useData();

    return (
        <div>
            <p className="text-3xl font-bold text-center p-8 mt-20 mb-8 underline">Popular Classes</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    popularData.map(item => <PopularItem
                        key={item._id}
                        item={item}
                    ></PopularItem>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;