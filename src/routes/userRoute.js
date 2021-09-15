
import express from 'express';
import { getUser, register, login, fillBio } from '../controllers/userController'
import { validateEmail } from '../helpers/validateEmail'
const router = express.Router();

router.get('/', getUser);
router.post('/register', validateEmail, register);
router.post('/login', validateEmail, login);
router.post('/', fillBio);


export default router
