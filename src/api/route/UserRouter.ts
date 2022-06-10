import { Router } from "express";

const router = Router();

router.use("/signup", UseController.signUp);
router.use("/login", UseController.logIn);

export default router;
