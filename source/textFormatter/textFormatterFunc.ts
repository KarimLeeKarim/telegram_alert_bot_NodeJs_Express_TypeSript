import { Provider } from "../types";

export const textFormatterFunc = (text: Provider): string=>{

//Define Text Format in Telegram
    return `💻 *service_name*:  ${text.service_name}

🛃 *reason*:  ${text.reason}

💼 *trace*:  ${text.trace.trace}

🗣 *requested_service_name*:  ${text.trace.requested_service_name}

📊 *path_params*:  ${JSON.stringify(text.trace.path_params)}

🏋️*request_body*:  ${JSON.stringify(text.trace.request_body)}

🌐 *request_url*:  ${text.trace.request_url}

🛑  🛑  🛑  🛑  🛑  🛑  🛑  🛑  🛑  🛑  🛑  🛑
`};
