import * as studentService from '../services/studentService.js';

export const fetchAllstudent = async (req, res) =>{
    res.status(200).json(student);
}