import epr from 'express-promise-router';
import funcionarioController from '../controllers/FuncionarioController';

const router = epr();

router.post('/add', funcionarioController.add);
router.get('/query', funcionarioController.query);
router.get('/list', funcionarioController.list);
router.put('/update', funcionarioController.update);
router.delete('/remove', funcionarioController.remove);
router.put('/activate', funcionarioController.activate);
router.put('/deactivate', funcionarioController.deactivate);

export default router;