import express from "express";
import { 
    getCreators,
    getCreatorById,
    createCreator,
    updateCreator,
    deleteCreator
} from "../controllers/Creators.js";

import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/creators', verifyUser, getCreators);
router.get('/creators/:id', verifyUser, getCreatorById);
router.post('/creators', verifyUser, createCreator);
router.patch('/creators/:id', verifyUser, updateCreator);
router.delete('/creators/:id', verifyUser, deleteCreator);


export default router;