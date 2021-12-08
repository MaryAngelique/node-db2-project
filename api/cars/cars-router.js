// DO YOUR MAGIC
const express = require('express')
const Car = require('./cars-model')
const {
    checkCarId,
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique
} = require('./cars-middleware')

const router = express.Router()

router.get('/', async ( req,res,next ) => {
    try{
        const cars = await Car.getAll();
        res.json(cars);

    } catch (error) {
        next(error);
    }
})

router.get('/:id', checkCarId, async ( req,res, next ) => {
    try {
        res.json(req.car);

    } catch (error) {
        next(error);
    }
})

router.post('/', checkCarPayload, checkVinNumberValid, checkVinNumberUnique, async (req, res, next) => {
    try {
      const data = await Car.create(req.body);
      res.json(data);
      
    } catch (error) {
      next(error);
    }
})

router.use((err, req, res, next) => {

    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    })
})

module.exports = router