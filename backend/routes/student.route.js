const express = require('express');
const studentRoute = express.Router();

//Student model
let StudentModel = require('../models/Student.js');
// get ---- /api
// post --- /api/create-student
// get ---- /api/edit-student/:id
// post --- /api/update-student/:id
// delete - /api/delete-student/:id
studentRoute.route('/').get((req, res) => {
  StudentModel.find( (error, data) => {
    if(error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
//Create student
studentRoute.route('/create-student').post( (req,res) => {
  StudentModel.create( req.body, (error , data) => {
    if(error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

studentRoute.route('/edit-student/:id').get( (req,res) => {
  StudentModel.findById(req.params.id, (error , data) => {
    if(error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
//Update student
studentRoute.route('/update-student/:id').post( (req,res) => {
  StudentModel.findByIdAndUpdate({"_id":req.params.id}, {$set : req.body}, (error , data) => {
    if(error) {
      return next(error)
    } else {
      res.json(data)
      console.log('Student successfully updated!')
    }
  })
});
//Delete student
studentRoute.route('/delete-student/:id').delete( (req,res) => {
  StudentModel.findOneAndRemove({"_id":req.params.id}, (error,data) => {
    if(error) {
      return next(error)
    } else {
      res.status(200).json({
        msj: data
      })
    }
  })
});

module.exports = studentRoute;
