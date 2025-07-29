import { PlayerModel } from "../models/player-model";
import * as PlayerRepository from "../repositories/players-repository";
import * as httpResponse from "../utils/htttp-helper";
import { StatisticsModel } from "../models/statistics-model";

// Buscar todos os jogadores
export const getPlayerService = async () => {
    const data = await PlayerRepository.findAllPlayers();

    if (data && data.length > 0) {
        return httpResponse.ok(data);
    } else {
        return httpResponse.noContent({ player: '', team: '', position: '' });
    }
};

// Buscar jogador por ID
export const getPlayerByIdService = async (id: number) => {
    const data = await PlayerRepository.findPlayerById(id);

    if (data) {
        return httpResponse.ok(data);
    } else {
        return httpResponse.noContent({ player: '', team: '', position: '' });
    }
};

// Criar jogador
export const createPlayerService = async (player: PlayerModel) => {
    if (Object.keys(player).length > 0) {
        await PlayerRepository.insertPlayer(player);
        return httpResponse.created();
    } else {
        return httpResponse.badRequest({ message: "Invalid player data" });
    }
};

// Deletar jogador
export const deletePlayerService = async (id: number) => {
    const isDeleted = await PlayerRepository.deleteOnePlayer(id);

    if (isDeleted) {
        return httpResponse.noContent();
    } else {
        return httpResponse.notFound({ message: "Player not found" });
    }
};

// Atualizar estatísticas de jogador
export const updatePlayerService = async (id: number, statistics: StatisticsModel) => {
    const data = await PlayerRepository.findAndModifyPlayer(id, statistics);

    if (data) {
        return httpResponse.ok(data);
    } else {
        return httpResponse.noContent({ player: '', team: '', position: '' });
    }
};