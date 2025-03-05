import bookController from '../controllers/book.controllers.js'
import { Router } from 'express';
const router = Router();
router
    .route('/api/book/getAllBooks')
    .get( bookController.getAllBooks)
router
    .route('/api/book/findBook/:id')
    .get( bookController.findBook)
router
    .route('/api/book/updateBook/:id')
    .patch( bookController.updateBook)
router
    .route('/api/book/deleteBook/:id')
    .delete( bookController.deleteBook)
router
    .route('/api/book/insertBook')
    .post( bookController.insertBook)

export default router;