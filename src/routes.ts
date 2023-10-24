import { Router } from "express";
import { UserController } from "./controllers/UserController";

const router = Router();

const userController = new UserController();

router.get("/", userController.getAll);
router.get("/:userId", userController.getById);
router.post("/create", userController.create);
router.put("/update/:userId", userController.update);
router.delete("/delete/:userId", userController.delete);

export { router };
