export type objectKeyValue = {
    [key: string]: string
};

export interface Provider {
    name: string;
    reason: string;
    trace: string;
};

export type ResponseSchema = {
    message: string;
    status_code: number;
}