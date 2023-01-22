const Thingy = require('./thingy.model');
const Print = require('../prints/print.model')

//GET
const getThingies = async (req, res, next) => {
  try {
    const thingies = await Thingy.find().populate({path: 'user' , select: 'alias'});
    return res.status(200).json(thingies);
  }
  catch (error) {
    return next(error)
  }
}

const getThingy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const thingy = await Thingy.findById(id).populate({path: 'user' , select: 'alias'});
    const filterPrints = await Print.find({thingy: id}) //*LOS PRINTS LOS MUESTRA FILTRANDO LA COLECCION DE PRINTS Y MOSTRANDO LOS QUE TIENEN EL ID QUE CORRESPONDE A ESTE THINGY
    return res.status(200).json({thingy: thingy, prints: filterPrints})
  }
  catch (error) {
    return next(error)
  }
}

//POST
const createThingy = async (req, res, next) => {
  try {
    const data = {...req.body , user: req.user._id}    //*AÑADE LA ID DEL USUARIO LOGEADO 
    const thingyToCreate = new Thingy(data);

    const created = await thingyToCreate.save();
    return res.status(201).json(created);
  }
  catch (error) {
    return next(error);
  }
}

//PUT
const editThingy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const fields = {...req.body};
    const options = { new: true }; //if true, return the modified document rather than the original
    const edited = await Thingy.findByIdAndUpdate(id, fields, options);
    return res.status(200).json(edited)
  }
  catch (error) {
    return next(error)
  }
}

//DELETE
const deleteThing = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await Thingy.findByIdAndDelete(id);
    return res.status(200).json(deleted);
  }
  catch (error) {
    return next(error);
  }
}

module.exports = {
  getThingies,
  getThingy,
  createThingy,
  editThingy,
  deleteThing
}