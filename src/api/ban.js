import axios from "axios";

export const banUser = async (userName, numberOfDay) => {
    try {
        const response = await axios.post(`https://tourism-guide-man.azurewebsites.net/api/Account/ban-user`,{
                userName,
                numberOfDay
            
        });
        return response.data;
    } catch (error) {
        throw error;
      } 
}