import { useEffect, useState } from "react";

const useData = () => {
    const [popularData, setPopularData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setPopularData(data);
                setLoading(false);
            });
    }, [])
    return [popularData, loading]
}

export default useData;