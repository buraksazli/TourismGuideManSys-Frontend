import axios from "axios";

export const authanticateAdmin = async (email, password) => {
    try{
        const response = await axios.post('https://tourism-guide-man.azurewebsites.net/api/Account/authenticate-admin', {
            email,
            password
        });
        return response.data;
    } catch (error) {
        throw error;
      }
    
}