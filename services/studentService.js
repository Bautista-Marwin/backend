import * as studentModel from '../models/studentModel.js';

export const fetchALLstudent = async() =>{
    const student = await studentModel.fetch();
    return student;
}
