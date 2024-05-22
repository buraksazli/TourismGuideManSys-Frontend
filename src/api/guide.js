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

export const addNewGuide = async ({guide}) => {
    const biography = "New guide";
    const languageIds = [0,1];
    const { firstName, lastName, email, userName, password, confirmPassword, phoneNumber, TCNo, birthDate } = guide;
    try {
        const response = await axios.post('https://tourism-guide-man.azurewebsites.net/api/Account/register-guide', {
            firstName,
            lastName,
            email,
            userName,
            password,
            confirmPassword,
            phoneNumber,
            biography,
            languageIds,
            TCNo,
            birthDate
           
        }) 
        console.log(firstName);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const confirmGuide = async (token, guideId, isVerified) => {
    const Token = token;
    try {
        const response = await axios.put('https://tourism-guide-man.azurewebsites.net/api/v1/Guide', {
            guideId,
            isVerified
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
            
        return response.data;
    } catch (error) {
        throw error;
    }
}