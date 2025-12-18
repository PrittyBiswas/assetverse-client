import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function RequestBarChart({ data }) {
  return (
    <div className="card bg-base-100 shadow p-4">
      <h3 className="font-semibold mb-4">Top Requested Assets</h3>

      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="asset" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#1e40af" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
