import { useEffect, useState } from "react";
import PageTitle from "../../components/common/PageTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";

export default function MyTeam() {
  const axiosSecure = useAxiosSecure();
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axiosSecure.get("/affiliations/me").then((res) => {
      setTeams(res.data);
    });
  }, []);

  return (
    <>
      <PageTitle
        title="My Team"
        subtitle="Colleagues across companies"
      />

      <div className="grid md:grid-cols-4 gap-4">
        {teams.map((member) => (
          <div
            key={member.employeeEmail}
            className="card bg-base-100 shadow p-4"
          >
            <h4 className="font-semibold">{member.employeeName}</h4>
            <p className="text-xs">{member.companyName}</p>
            <p className="text-xs mt-1">{member.employeeEmail}</p>
          </div>
        ))}
        {teams.length === 0 && (
          <p className="text-center col-span-full">
            No team members found
          </p>
        )}
      </div>
    </>
  );
}
