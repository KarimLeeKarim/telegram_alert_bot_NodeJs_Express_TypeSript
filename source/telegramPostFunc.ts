import axios from 'axios';
import config from './config/config';

interface Provider {
    service_name: string;
    reason: string;
    trace: string;
}

export interface ResponseSchema {
    message: string;
    status_code: number;
}

export const telegramPostFunc = async( text: Provider):  Promise<ResponseSchema> => {
    const value = `💻 *Service name*: ${text.service_name}

🛃 *Reason*: ${text.reason}

💼 *Trace*: ${text.trace}`;
    console.log(`${config.api_url}/sendMessage`);
    
    const response =  await axios.post(`${config.api_url}/sendMessage`, {
        chat_id: config.chat_id,
        text: value,
        parse_mode: 'Markdown'
    })
    .then(ok=>{
        return Promise.resolve({
            message:'Message send is successful',
            status_code: 200,
        })
    })
    .catch(err=> {        
       return Promise.resolve({
            message:err.response.data,
            status_code: err.response.status,
        });     
    });

    return response;
};
