const Thingy = require('./thingy.model');

//GET
const getThingies = async (req, res, next) => {
  try {
    const thingies = await Thingy.find();
    return res.status(200).json(thingies);
  }
  catch (error) {
    return next(error)
  }
}

//POST
const createThingy = async (req, res, next) => {
  try {
    const thingyToCreate = new Thingy(req.body);
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
  createThingy,
  editThingy,
  deleteThing
}