import { useQuery } from "@tanstack/react-query";

const useData = () => {


    const { data: allData = [], isLoading: loading } = useQuery({
        queryKey: ['allData'],
        queryFn: async () => {
            const res = await fetch('https://draw-wise-camp-server.vercel.app/allData')
            return res.json()

        }
    })


    return [allData, loading]
}

export default useData;