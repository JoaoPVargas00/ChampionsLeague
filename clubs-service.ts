import * as httpResponse from "../utils/htttp-helper";
import * as repository from "../repositories/clubs-repository";

export const getClubsService = async () => {
    const data = await repository.findAllClubs();
    const response = httpResponse.ok(data);
    
    return response;

};