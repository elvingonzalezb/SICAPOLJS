import epr from 'express-promise-router';
import articuloController from '../controllers/ArticuloController';

const router = epr();

router.post('/add', articuloController.add);
router.get('/query', articuloController.query);
router.get('/queryCodigo', articuloController.queryCodigo);
router.get('/list', articuloController.list);
router.put('/update', articuloController.update);
router.delete('/remove', articuloController.remove);
router.put('/activate', articuloController.activate);
router.put('/deactivate', articuloController.deactivate);

export default router;