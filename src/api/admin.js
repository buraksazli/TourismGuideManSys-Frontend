import axios from "axios";

export const getAllAdmins = async (token) => {
    const Token = token;
    try {
        const response = await axios.get('https://tourism-guide-man.azurewebsites.net/api/v1/Admin', {
            headers: {
                'Authorization': `Bearer ${Token}` 
            }
        })
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const addNewAdmin = async ({admin}) => {
    const { firstName, lastName, email, userName, password, confirmPassword, phoneNumber, birthDate } = admin;
    try {
        const response = await axios.post('https://tourism-guide-man.azurewebsites.net/api/Account/register-admin', {
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