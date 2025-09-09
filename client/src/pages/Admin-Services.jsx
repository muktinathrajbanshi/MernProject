import React, { useEffect, useState } from 'react';
import { useAuth } from '../store/auth';

const AdminServices = () => {

    const { authorizationToken, API } = useAuth();
    const[services, setServices] = useState([]);

    const getAllServiceData = async () => {
         try {
            const response = await fetch(`${API}/api/admin/services`, {
                method: "GET",
                headers:{
                    Authorization: authorizationToken,
                },
            });
            const data = await response.json();
            console.log(`users ${data}`);
            setServices(data);
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
            getAllServiceData();
        }, []);

  return (
    <>
      
    </>
  );
};

export default AdminServices;
