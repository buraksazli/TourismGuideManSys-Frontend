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

export const getRatingByGuideId = async (token , GuideUserId) => {
    const Token = token;
    try {
        const response = await axios.get('https://tourism-guide-man.azurewebsites.net/api/v1/Rating', {
            params: {
                'GuideUserId' : GuideUserId
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

export const getAllReportedRatings = async (token ) => {
    const Token = token;
    try {
        const response = await axios.get('https://tourism-guide-man.azurewebsites.net/api/v1/Report', {  
            headers: {
                'Authorization': `Bearer ${Token}` 
            }
            
        });
        return response.data;
    } catch (error) {
        throw error;
      }   
}

export const deleteReportedRating = async (token, id) => {
    const Token = token;
    try {
        const response = await axios.delete(`https://tourism-guide-man.azurewebsites.net/api/v1/Rating/${id}`,{  
            headers: {
                'Authorization': `Bearer ${Token}` 
            }
            
        });
        return response.data;
    } catch (error) {
        throw error;
      } 
}

export const deleteJustReport = async (token, id) => {
    try {
        const response = await axios.delete(`https://tourism-guide-man.azurewebsites.net/api/v1/Report/${id}`,{  
            headers: {
                'Authorization': `Bearer ${token}` 
            }  
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}