import { Router } from "express";
import* as PlayerController from "./controllers/player-controller";
import * as ClubsControllers from "./controllers/clubs-controllers";

const router = Router();

router.get("/palyers", PlayerController.getPlayer);
router.post("/players", PlayerController.postPlayer);
router.delete("/players/:id", PlayerController.deletePlayer);
router.patch("/players/:id", PlayerController.updatePlayer );

router.get("/clubs", ClubsControllers.getClubs);


router.get("/players/:id", PlayerController.getPlayerById);

export default router;