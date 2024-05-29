import axios from "axios";

export const getDashboardInfos = async (token) => {
    const Token = token;
    try {
        const response = await axios.get('https://tourism-guide-man.azurewebsites.net/api/Dashboard', {
            headers: {
                'Authorization': `Bearer ${Token}` 
            }
        });
        return response.data;
    } catch (error) {
        throw error;
      }   
}