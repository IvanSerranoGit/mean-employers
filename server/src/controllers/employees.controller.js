const employeesCtrl = {}

const Employee = require('../models/Employee')

employeesCtrl.getEmployees = async (req, res) => {
    const employees = await Employee.find()
    res.json(employees)
}
employeesCtrl.createEmployee = async(req, res) => {
    // console.log(req.body);
    const newEmployee = new Employee(req.body)
    console.log(newEmployee);

    await newEmployee.save()

    res.send({message:'Employee Created'})
}

employeesCtrl.getEmployee = async (req, res) => {
    console.log(req.params);
    const employee = await Employee.findById(req.params.id)
    res.send(employee)
}
employeesCtrl.editEmployee = async (req, res) => {
    await Employee.findByIdAndUpdate(req.params.id, req.body)
    res.json({status:'employee update'})
}

employeesCtrl.deleteEmployee =  async (req, res) => {
    const employee = await Employee.findByIdAndDelete(req.params.id)
    res.json({status:'Employee Deleted'})
}

module.exports = employeesCtrl; 