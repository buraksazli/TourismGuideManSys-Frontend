import axios from "axios";

export const getAllCompanies = async (token) => {
    const Token = token;
    try {
        const response = await axios.get('https://tourism-guide-man.azurewebsites.net/api/v1/Company', {
            headers: {
                'Authorization': `Bearer ${Token}` 
            }
        })
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const addNewCompany = async ({company , token}) => {
    const { name,email,address,phoneNumber } = company;
    try {
        const response = await axios.post('https://tourism-guide-man.azurewebsites.net/api/v1/Company', {
            'name':name, 
            'email':email,
            'address':address,
            'phoneNumber':phoneNumber
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