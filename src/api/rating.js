import axios from "axios";

export const getRatingByTourId = async (token , tourId) => {
    const Token = token;
    try {
        const response = await axios.get('https://tourism-guide-man.azurewebsites.net/api/v1/Rating', {
            params: {
                'TourId' : tourId
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

export const getRatingByTouristId = async (token , TouristUserId) => {
    const Token = token;
    try {
        const response = await axios.get('https://tourism-guide-man.azurewebsites.net/api/v1/Rating', {
            params: {
                'TouristUserId' : TouristUserId
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