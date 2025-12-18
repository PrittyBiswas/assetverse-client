import { useState } from "react";
import PageTitle from "../../components/common/PageTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";

export default function AddAsset() {
  const axiosSecure = useAxiosSecure();
  const [form, setForm] = useState({
    productName: "",
    productImage: "",
    productType: "Returnable",
    productQuantity: 1,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axiosSecure.post("/assets", form);
    alert("Asset added successfully");
    setForm({
      productName: "",
      productImage: "",
      productType: "Returnable",
      productQuantity: 1,
    });
  };

  return (
    <>
      <PageTitle
        title="Add New Asset"
        subtitle="Add assets to your inventory"
      />

      <form
        onSubmit={handleSubmit}
        className="card bg-base-100 shadow p-6 max-w-xl"
      >
        <input
          className="input input-bordered w-full mb-3"
          placeholder="Product Name"
          required
          value={form.productName}
          onChange={(e) =>
            setForm({ ...form, productName: e.target.value })
          }
        />

        <input
          className="input input-bordered w-full mb-3"
          placeholder="Product Image URL"
          required
          value={form.productImage}
          onChange={(e) =>
            setForm({ ...form, productImage: e.target.value })
          }
        />

        <select
          className="select select-bordered w-full mb-3"
          value={form.productType}
          onChange={(e) =>
            setForm({ ...form, productType: e.target.value })
          }
        >
          <option>Returnable</option>
          <option>Non-returnable</option>
        </select>

        <input
          type="number"
          min="1"
          className="input input-bordered w-full mb-4"
          value={form.productQuantity}
          onChange={(e) =>
            setForm({ ...form, productQuantity: e.target.value })
          }
        />

        <button className="btn btn-primary w-full">Add Asset</button>
      </form>
    </>
  );
}
