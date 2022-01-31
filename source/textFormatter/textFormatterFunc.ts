import { Provider } from "../types";

export const textFormatterFunc = (text: Provider): string=>{

//Define Text Format in Telegram
    return `💻 *service_name*:  ${text.name}

🛃 *reason*:  ${text.reason}

💼 *trace*:  ${text.trace}

🛑  🛑  🛑  🛑  🛑  🛑  🛑  🛑  🛑  🛑  🛑  🛑
`};

