import express from "express";
import { trainingController } from "../../controllers/training/training_controller.js";

const router_training = express.Router();

router_training.get('/panel', trainingController.panel_module)
router_training.get('/nueva_dnf', trainingController.new_dnf)
router_training.get('/capacitaciones', trainingController.showTraining)
router_training.get('/capacitaciones/ver_capacitacion', trainingController.show_training)
router_training.get('/capacitaciones/ver_dnfs', trainingController.show_trainings_dnf)
router_training.get('/capacitaciones/plan_capacitacion', trainingController.show_trainings_planned)


export default router_training;