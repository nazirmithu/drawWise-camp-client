import { useEffect, useState } from "react";
import PopularItem from "../PopularItem/PopularItem";

const PopularClasses = () => {
    const [popularClass, setPopularClass] = useState([]);


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPopularClass(data))
    }, [])
    return (
        <div>
            <p className="text-3xl font-bold text-center p-8 mb-8">Popular Classes</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    popularClass.map(item => <PopularItem
                        key={item._id}
                        item={item}
                    ></PopularItem>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;