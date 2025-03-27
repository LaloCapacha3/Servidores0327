import {Router} from 'express';
import { getAll } from '../controllers/users';
import { getAll as getAllProducts} from '../controllers/products';
import { role } from '../middlewares/role'
import { downloadFile, uploadFile } from '../controllers/files';
import upload from '../middlewares/upload';

export const router = Router();
/**
 * @swagger
 * /test:
 *   get:
 *     summary: Obtener todos los usuarios
 *     description: Retorna una lista de todos los usuarios disponibles.
 *     parameters:
 *       - in: query
 *         name: paramName
 *         description: Descripción del parámetro opcional.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de todos los usuarios.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: "Juan Pérez"
 */
router.get('/test', (req, res) => {
    res.send('test endpoint works');
});

/**
 * @swagger
 * /products:
 *  get:
 *   description: Este es el endpoint para listar productos
 *   tags: [Products]
 *   parameters:
 *    - in: query
 *      name: test
 *      description: nomas para poner algo
 *      schema:
 *       type: string
 *   responses:
 *    200:
 *     description: lista de productos
 *    500:
 *     description: se esta quemando el servidor
 *    400:
 *     description: te falto un parametro
 */
router.get('/products', getAllProducts)


router.get('/users',role(['admin']), getAll)

router.get('/download', downloadFile)

router.post('/download', upload.single('image') , uploadFile)

export default router;