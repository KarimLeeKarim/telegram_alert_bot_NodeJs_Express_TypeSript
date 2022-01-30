import { Provider } from "../types";

export const textFormatterFunc = (text: Provider): string=>{
    let eachRequestBody:string[]=[];

//Format only RequestBody in Trace
    for (const [key, value] of Object.entries(text.trace.request_body)) {
        eachRequestBody.push(`💃*${key}*:  ${value}`);
    };


//Define Text Format in Telegram
    return `💻 *service_name*:  ${text.service_name}

🛃 *reason*:  ${text.reason}

💼 *trace*:  ${text.trace.trace}

🗣 *requested_service_name*:  ${text.trace.requested_service_name}

🅰️ *path_params A*:  ${text.trace.path_params.a}

🅱️ *path_params B*:  ${text.trace.path_params.b}

${eachRequestBody.join('\n\n')  }

🌐 *request_url*:  ${text.trace.request_url}

🛑  🛑  🛑  🛑  🛑  🛑  🛑  🛑  🛑  🛑  🛑  🛑
`};

