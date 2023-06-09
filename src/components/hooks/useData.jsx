import { useEffect, useState } from "react";

const useData = () => {
    const [popularData, setPopularData] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch('http://localhost:5000/popularclass')
            .then(res => res.json())
            .then(data => {
                setPopularData(data);
                setLoading(false);
            });
    }, [])
    return [popularData, loading]
}

export default useData;