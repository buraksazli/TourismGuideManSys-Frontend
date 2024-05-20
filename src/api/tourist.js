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

export const addNewTourist = async ({tourist}) => {
    const { firstName, lastName, email, userName, password, confirmPassword, phoneNumber, birthDate } = tourist;
    try {
        const response = await axios.post('https://tourism-guide-man.azurewebsites.net/api/Account/register-tourist', {
            firstName,
            lastName,
            email,
            userName,
            password,
            confirmPassword,
            phoneNumber,
            birthDate
        }) 
        console.log(firstName);
        return response.data;
    } catch (error) {
        throw error;
    }
}