const Print = require('./print.model');

//GET
const getPrints = async (req, res, next) => {
  try {
    console.log('USUARION LOGEADO: ', req.user);
    
    const allPrints = await Print.find().populate({path: "thingy", select: "title"}).populate({path: 'user' , select: 'alias'});
    return res.status(200).json(allPrints);
  }
  catch(error) {
    return next(error)
  }
}

const getPrint = async (req, res, next) => {
  try {
    const {id} = req.params;
    const print = await Print.findById(id);
    return res.status(200).json(print);
  }
  catch(error) {
    return next(error);
  }
}

//POST
const createPrint = async (req, res, next) => {
  try {
    const data = {...req.body , user: req.user._id}    //*AÑADE LA ID DEL USUARIO LOGEADO a la propiedad user:
    const printToCreate = new Print(data);
    const created = await printToCreate.save();
    return res.status(201).json(created);
  }
  catch(error) {
    // return res.status(400).json("Error al crear new Print")
    return next(error);
  }
}


//PUT
const editPrint = async (req, res, next) => {
  try {
    const { id } = req.params;
    const fields = {...req.body};
    const options = { new: true };
    const edited = await Print.findByIdAndUpdate(id, fields, options)
    return res.status(200).json(edited);
  }
  catch(error) {
    return next(error);
  }
}


//DELETE
const deletePrint = async (req, res, next) => {
  try {
    const { id } = req.params;
    const  deleted = await Print.findByIdAndDelete(id);
    return res.status(200).json(deleted)
  }
  catch(error) {
    return next(error)
  }
}


module.exports = {
  getPrints,
  getPrint,
  createPrint,
  editPrint,
  deletePrint
}