import axios from "axios";

export const getAllGuides = async (token , isVerified) => {
    const Token = token;
    try {
        const response = await axios.get('https://tourism-guide-man.azurewebsites.net/api/v1/Guide', {
            params: {
                'isVerified': isVerified
            },    
            headers: {
                    'Authorization': `Bearer ${Token}` 
                }
            });
        return response.data;
    } catch (error) {
        throw error;
    }
}