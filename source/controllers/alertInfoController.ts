import { ProviderDB } from '../types';
import { Request, Response } from 'express';
import { filtratioByQueryString, isEmptyCheker, paginationCreator } from '../helpers/utils';
import { Parsedata } from '../database/models/Parsedata';

export interface RequestInterface {
    query: Request;
}

export const getAlertInfo = async (request: RequestInterface, response: Response): Promise<void> => {
    const object: any = request.query;
    const { page, size }: any = request.query;

    let isEmpty = Object.keys(object).length > 0;

    isEmptyCheker(isEmpty, response);
    if (!page) {
        filtratioByQueryString(object, response);
    }
    paginationCreator(page, size, response);
};

export const createAlertInfo = (postText: ProviderDB): void => {
    Parsedata.create(postText)
        .then(() => console.log('Columns were added to the database'))
        .catch((err: any) => console.log(`Error is here ${err}`));
};
