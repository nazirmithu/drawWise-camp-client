import { useQuery } from "@tanstack/react-query";

const useData = () => {


    const { data: allData = [], isLoading: loading } = useQuery({
        queryKey: ['allData'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/allData')
            return res.json()

        }
    })


    return [allData, loading]
}

export default useData;