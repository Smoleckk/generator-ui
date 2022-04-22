import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8021/api/v1/employees";
const SALARY_API_BASE_URL = "http://localhost:8021/api/v1/salaries";


class EmployeeService {
    saveEmployee(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL, employee)
    }
    getEmployees() {
        return axios.get(EMPLOYEE_API_BASE_URL)
    }
    deleteEmployee(id) {
        return axios.delete(EMPLOYEE_API_BASE_URL + "/" + id);
    }
    getEmployeeById(id) {
        return axios.get(EMPLOYEE_API_BASE_URL + "/" + id)
    }
    updateEmployee(employee, id) {
        return axios.put(EMPLOYEE_API_BASE_URL + "/" + id, employee)
    }


    deleteSalary(id) {
        return axios.delete(SALARY_API_BASE_URL + "/" + id);
    }

}
export default new EmployeeService();