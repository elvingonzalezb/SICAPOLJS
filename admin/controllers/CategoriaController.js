import models from '../models';

// podemos exportar objetos, clases, modulos
export default {
  add: async (req, res, next) => {     
    try {
        const reg = await models.Categoria.create(req.body);
        res.status(200).json(reg);
        console.log('Entrando en  add');
    } catch (e) {
        res.status(500).send({
            mensaje: "Error al crear categoria"
        });
        next(e);
    }
  },
  query: async (req, res, next) => {
    try {//busca el id que coincida con el parametro query
        const reg = await models.Categoria.findOne({_id:req.query._id});
        /* si no existe la categoria en la BD
        Envia status no found y mensaje
        si existe en via mensaje exitoso y el registro en json */
        if (!reg) {
            res.status(400).send({
                mensaje: 'La Categoria no existe'
            });
        } else {
            res.status(200).json(reg);
        }
    } catch (e) {
        res.status(500).send({
            mensaje: "Error al consultar categoria"
        });
        next(e);
    }
  },
  list: async (req, res, next) => { 
      try {
          let valor = req.query.valor;
          const reg = await models.Categoria.find({ 
                $or: [{ 
                  'nombre': new RegExp(valor, 'i') 
                }, { 
                    'descripcion': new RegExp(valor, 'i') 
                }] }, 
                { createdAt: 0 })
              .sort({ 'createdAt': -1 });
          res.status(200).json(reg);
      } catch (e) {
          res.status(500).send({
              mensaje: "Error al listar categoria"
          });
          next(e);
      }
  },
  update: async (req, res, next) => {
      try { //actualiza por el id   
        const reg = await models.Categoria.findByIdAndUpdate({
            _id: req.body._id 
            }, { 
                nombre: req.body.nombre, 
                descripcion: req.body.descripcion 
            });
        res.status(200).json(reg);
      } catch (e) {
          res.status(500).send({
              mensaje: "Error al actualizar categoria"
          });
          next(e);
      }
  },
  remove: async (req, res, next) => {
      try {// elimina por el id
          const reg = await models.Categoria.findByIdAndDelete({ _id: req.body._id });
          res.status(200).json(reg);
      } catch (e) {
          res.status(500).send({
              mensaje: "Error al eliminar categoria"
          });
          next(e);
      }
  },
  activate: async (req, res, next) => {
      try {// busca por el id y actualiza el estado a 1
          const reg = await models.Categoria.findByIdAndUpdate({ 
            _id: req.body._id 
            }, { 
                estado: 1 
            });
          res.status(200).json(reg);
      } catch (e) {
          res.status(500).send({
              mensaje: "Error al activar categoria"
          });
          next(e);
      }
  },
  deactivate: async (req, res, next) => {
      try {//busca por el id y actualiza el estado a 0
          const reg = await models.Categoria.findByIdAndUpdate({ 
            _id: req.body._id 
            }, { 
                estado: 0 
            });
          res.status(200).json(reg);
      } catch (e) {
          res.status(500).send({
              mensaje: "Error al desactivar categoria"
          });
          next(e);
      }
  }
}