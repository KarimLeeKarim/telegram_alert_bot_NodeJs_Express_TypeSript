import axios from 'axios';
import config from './config/config';
import { textFormatterFunc } from './textFormatter/textFormatterFunc';
import { Provider, ResponseSchema } from './types';

export const telegramPostFunc = async( text: Provider):  Promise<ResponseSchema> => {
    const value = textFormatterFunc(text);
    
    const response =  await axios.post(`${config.api_url}/sendMessage`, {
        chat_id: config.chat_id,
        text: value,
        parse_mode: config.parseModes.mark
    })
    .then(success=>{
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
