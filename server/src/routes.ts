import { Router } from "express";
import express from "express";

const router = Router();

router.use(express.json());

router.post("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

router.post("/resolveEquation", (req, res)=>{
    const strokesIds: number[] = req.body.strokesIds;
});

export default router;