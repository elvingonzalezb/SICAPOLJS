import epr from 'express-promise-router';
import categoriaRouter from './categoria';
import articuloRouter from './articulo';
import usuarioRouter from './usuario';
import funcionarioRouter from './funcionario';

const router = epr();

router.use('/categoria', categoriaRouter);
router.use('/articulo', articuloRouter);
router.use('/usuario', usuarioRouter);
router.use('/funcionarios', funcionarioRouter);

export default router;