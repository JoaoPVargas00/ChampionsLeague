import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";

const database: PlayerModel[] = [
    {
        id: 1,
        name: "Lionel Messi",
        club: "Inter Miami",
        nationality: "Argentina",
        position: "Forward",
        statistics: {
            Overrall: 93,
            Pace: 85,
            Shooting: 94,
            Passing: 91,
            Dribbling: 95,
            Defending: 38,
            Physical: 65,
        },
    },
    {
        id: 2,
        name: "Cristiano Ronaldo",
        club: "Al Nassr",
        nationality: "Portugal",
        position: "Forward",
        statistics: {
            Overrall: 90,
            Pace: 82,
            Shooting: 93,
            Passing: 81,
            Dribbling: 87,
            Defending: 35,
            Physical: 78,
        },
    },
    {
        id: 3,
        name: "Neymar Jr",
        club: "Santos FC",
        nationality: "Brasil",
        position: "Forward",
        statistics: {
            Overrall: 91,
            Pace: 82,
            Shooting: 93,
            Passing: 81,
            Dribbling: 99,
            Defending: 35,
            Physical: 45,
        },
    },
];

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
};

export const findPlayerById = async (
    id: number
): Promise<PlayerModel | undefined> => {
    return database.find(player => player.id === id);
};

export const insertPlayer = async (player: PlayerModel): Promise<void> => {
    database.push(player);
};

export const deleteOnePlayer = async (id: number): Promise<void> => {
    const index = database.findIndex(player => player.id === id);
    if (index !== -1) {
        database.splice(index, 1);
    }
};

export const findAndModifyPlayer = async (
    id: number,
    statistics: StatisticsModel
): Promise<PlayerModel | undefined> => {
    const playerIndex = database.findIndex(player => player.id === id);
    if (playerIndex !== -1) {
        database[playerIndex].statistics = statistics;
        return database[playerIndex];
    }
    return undefined;
};
