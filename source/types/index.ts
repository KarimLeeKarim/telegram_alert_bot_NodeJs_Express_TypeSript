export type objectKeyValue = {
    [key: string]: string
};

export interface ProviderDB {
    service_name: string;
    trace: string;
    requested_name: string;
    path_params: string;
    request_body: string;
    request_methods: string;
    request_url: string;
}

export type ResponseSchema = {
    message: string;
    status_code: number;
}