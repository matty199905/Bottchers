import axios from 'axios'


export const emailJsApi = async(user_name, email, message) => {
    const serviceId = 'service_4nr7uhx';
    const templateId = 'contact_form';
    const publicKey = 'HFL8hxEgVMEM8UKla';

    const data = {
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
            from_name: user_name,
            from_email: email,
            to_name: 'Bottchers',
            message: message,
        }
    };

    try {
        const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', data);
        return {
            success: true,
            message: alert('Mensaje enviado correctamente') ,
            data: response.data
        };
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        return {
            success: false,
            message: 'Error al enviar el email',
            error: error.response ? error.response.data : error.message
        };
    }
}
