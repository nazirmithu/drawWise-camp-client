import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useSelectedClass = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();

    const { isLoading, refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const response = await axiosSecure(`/carts?email=${user?.email}`)
            console.log('res from axios', response)
            return response.data;
        },
    })

    return [cart, refetch, isLoading]
};

export default useSelectedClass;