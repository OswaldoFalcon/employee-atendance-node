/** @format */

const express = require("express");
const router = express.Router();

const Employee = require("../models/Employee");

router.get("/", async (_req, res) => {
  const employees = await Employee.find();
  res.json(employees);
  console.log(employees);
});

router.post("/", async (req, res) => {
  const employee = new Employee(req.body);
  await employee.save();
  res.json({
    status: "employee attendece saved",
  });
});

router.put("/:id", async (req, res) => {
  await Employee.findByIdAndUpdate(req.params.id, req.body);
  res.json("Employee atttendece updated");
});

router.delete("/:id", async (req, res) => {
  await Employee.findByIdAndRemove(req.params.id, req.body);
  res.json("Employee atttendece deleted");
});

module.exports = router;
