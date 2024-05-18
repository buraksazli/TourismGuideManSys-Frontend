import axios from "axios";

export const getAllTourists = async (token) => {
    const Token = token;
    try {
        const response = await axios.get('https://tourism-guide-man.azurewebsites.net/api/v1/Tourist', {
            headers: {
                'Authorization': `Bearer ${Token}` 
            }
        })
        return response.data;
    } catch (error) {
        throw error;
    }
}