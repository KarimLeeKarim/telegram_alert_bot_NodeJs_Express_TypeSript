import { Parsedata } from '../database/models/Parsedata';
import { Response } from 'express';
import { Sequelize } from '../config/db';
import { objectKeyValue } from '../types';
const Op = Sequelize.Op;

export const isEmptyCheker = async (isEmpty: boolean, response: Response): Promise<void> => {
    if (!isEmpty) {
        const data = await Parsedata.findAndCountAll();
        response.json({
            data
        });
    }
};

export const filtratioByQueryString = async ( object: objectKeyValue, response: Response): Promise<void> => {
        const array: string[] = [];

        for (let valueOfObject in object) {
            array[0] = valueOfObject;
            array[1] = object[valueOfObject];
        }
        const result = await Parsedata.findAndCountAll({
            where: { [array[0]]: { [Op.like]: '%' + array[1] + '%' } }
        });
        response.json({ result });
};

export const paginationCreator = async (page: string, size: string, response: Response): Promise<void> => {
    const pageAsNumber = Number.parseInt(page);
    const sizeAsNumber = Number.parseInt(size);
    let pageNumber = 0;
    if (!Number.isNaN(pageAsNumber) && pageAsNumber > 0) {
        pageNumber = pageAsNumber;
    }

    let sizeNumber: any = 10;
    if (!Number.isNaN(sizeAsNumber) && !(sizeAsNumber > 10) && !(sizeAsNumber < 1)) {
        sizeNumber = sizeAsNumber;
    }

    const pagination = await Parsedata.findAndCountAll({
        limit: sizeNumber,
        offset: (pageNumber - 1) * sizeNumber
    });
    response.json({
        content: pagination.rows,
        totalPages: Math.ceil(pagination.count / Number.parseInt(sizeNumber))
    });
};
