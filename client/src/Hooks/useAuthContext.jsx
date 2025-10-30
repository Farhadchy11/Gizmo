import  { useContext } from 'react';
import { AuthContext } from './AuthProvider.jsx';

const useAuthContext = () => {
    const auth = useContext(AuthContext);
    return auth
};

export default useAuthContext;
