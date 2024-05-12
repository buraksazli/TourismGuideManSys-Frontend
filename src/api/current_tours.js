import axios from "axios";

export const getCurrentTours = async (token) => {
    const Token = token;
    try {
        const response = await axios.get('https://tourism-guide-man.azurewebsites.net/api/v1/Tour', {
            headers: {
                'Authorization': `Bearer ${Token}` 
            }
        });
        return response.data;
    } catch (error) {
        throw error;
      }
    
    
}