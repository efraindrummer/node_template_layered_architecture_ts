import express from "express";
import { trainingController } from "../../controllers/training/training_controller.js";

const router_training = express.Router();

router_training.get('/panel', trainingController.panel_module)
router_training.get('/capacitaciones', trainingController.showTraining)
router_training.get('/nueva_dnf', trainingController.new_dnf)


export default router_training;