import express from 'express'
import { contactForm} from '../controllers/controller'

const router = express.Router();

router.post('/contact', contactForm);

export default router;
