
import express from 'express';
// import { getLinks, createLink, deleteAll } from '../controllers/link'
import { getUser } from '../controllers/userController'
const router = express.Router();

/* Link routing. */
// router.get('/', function(req, res, next) {
//     // res.render('index', { title: 'Express' });
//     res.status(200).json({
//       message: `index page`
//     })
//   });
router.get('/', getUser);
// router.post('/', createLink);
// router.delete('/', deleteAll)


export default router
