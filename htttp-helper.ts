import { httpResponse } from "../models/http-response-mode";


export const ok = async (data: any, p0: { statusCode: number; body: undefined; }): Promise<httpResponse> => {
   return {
    statusCode: 200,
    body: data
   };
};

export const created = async (): Promise<httpResponse> => {
    return {
        statusCode: 201,
        body: {
            message: "sucessfully created",
        },
    };
};


export const noContent = async(data: { player: string; team: string; position: string; }): Promise<httpResponse> => {
    return {
        statusCode:204,
        body: null,
    };

};

export const badRequest = async (): Promise<httpResponse> => {
    return {
        statusCode: 400,
        body: null,
    };
};