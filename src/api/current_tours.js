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

export const getTourById = async (token, id) => {
    const Token = token;
    try {
        const response = await axios.get(`https://tourism-guide-man.azurewebsites.net/api/v1/Tour/${id}`, {
    headers: {
        'Authorization': `Bearer ${Token}` 
    }
});
        return response.data;
    } catch (error) {
        throw error;
      }      
}

export const deleteTouristFromTour = async (token, touristTourId) => {
    const Token = token;
    try {
        const response = await axios.delete(`https://tourism-guide-man.azurewebsites.net/api/v1/TouristTour/${touristTourId}`, {
            headers: {
                'Authorization': `Bearer ${Token}` 
            }
        });
        return response.data;
    } catch (error) {
        throw error;
      } 
}