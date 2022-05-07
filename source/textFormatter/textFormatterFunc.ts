import { ProviderDB } from '../types';

export const textFormatterFunc = (text: ProviderDB): string => {
    //Define Text Format in Telegram
    return `💻 *service_name*:  ${text.service_name}

💼 *trace*:  ${text.trace}

🗣 *requested_service_name*:  ${text.requested_name}

📊 *path_params*:  ${JSON.stringify(text.path_params)}

🏋️*request_body*:  ${JSON.stringify(text.request_body)}

🛃 *request_methods*:  ${text.request_methods}

🌐 *request_url*:  ${text.request_url}
🛑  🛑  🛑  🛑  🛑  🛑  🛑  🛑  🛑  🛑  🛑  🛑
`;
};
