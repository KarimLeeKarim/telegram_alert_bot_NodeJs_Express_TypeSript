export type objectKeyValue = {
    [key: string]: string
};

export interface Provider {
    service_name: string;
    reason: string;
    trace: {
        trace: string,
        requested_service_name: string,
        path_params: string,
        request_body: string,
        request_url: string,
    };
};

export type ResponseSchema = {
    message: string;
    status_code: number;
}