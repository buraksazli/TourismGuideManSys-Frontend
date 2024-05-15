import axios from "axios";

export const getRatingByTourId = async (token , tourId) => {
    const Token = token;
    try {
        const response = await axios.get('https://tourism-guide-man.azurewebsites.net/api/v1/Rating', {
            'TourId' : tourId,
            headers: {
                'Authorization': `Bearer ${Token}` 
            }
            
        });
        return response.data;
    } catch (error) {
        throw error;
      }   
}