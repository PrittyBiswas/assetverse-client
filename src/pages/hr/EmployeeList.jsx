import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import PageTitle from "../../components/common/PageTitle";

export default function EmployeeList() {
  const axiosSecure = useAxiosSecure();
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axiosSecure.get("/affiliations/hr").then((res) => {
      setEmployees(res.data);
    });
  }, []);

  return (
    <>
      <PageTitle title="My Employees" />

      <div className="overflow-x-auto bg-base-100 shadow rounded">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Company</th>
              <th>Joined</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp._id}>
                <td>{emp.employeeName}</td>
                <td>{emp.employeeEmail}</td>
                <td>{emp.companyName}</td>
                <td>
                  {new Date(emp.affiliationDate).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
