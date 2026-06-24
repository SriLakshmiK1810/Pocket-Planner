import { useState } from "react";
import Sidebar from "../components/Sidebar";

function AddExpenseScreen() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSaveExpense = () => {
    if (!title || !amount || !category) {
      alert("Please fill all fields");
      return;
    }

    const newExpense = {
      id: Date.now(),
      title,
      amount: Number(amount),
      category,
      date: new Date().toLocaleDateString(),
    };

    const existingExpenses =
      JSON.parse(localStorage.getItem("expenses")) || [];

    existingExpenses.push(newExpense);

    localStorage.setItem(
      "expenses",
      JSON.stringify(existingExpenses)
    );

    alert("Expense Added Successfully!");

    setTitle("");
    setAmount("");
    setCategory("");
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <main style={mainContent}>
        <div style={formCard}>
          <h1 style={{ margin: "0 0 25px", color: "#111827" }}>
            Add New Expense
          </h1>

          <input
            type="text"
            placeholder="Expense Title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            style={inputStyle}
          />

          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) =>
              setAmount(e.target.value)
            }
            style={inputStyle}
          />

          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
            style={inputStyle}
          >
            <option value="">
              Select Category
            </option>

            <option>Food</option>
            <option>Travel</option>
            <option>Shopping</option>
            <option>Others</option>
          </select>

          <button
            onClick={handleSaveExpense}
            style={btnStyle}
          >
            Save Expense
          </button>
        </div>
      </main>
    </div>
  );
}

const mainContent = {
  flex: 1,
  padding: "35px",
  background: "#F8FAFC",
};

const formCard = {
  maxWidth: "650px",
  margin: "40px auto",
  background: "#fff",
  padding: "35px",
  borderRadius: "20px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
};

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "18px",
  borderRadius: "12px",
  border: "1px solid #E5E7EB",
  fontSize: "15px",
  boxSizing: "border-box",
};

const btnStyle = {
  width: "100%",
  padding: "14px",
  background:
    "linear-gradient(135deg,#2563EB,#3B82F6)",
  color: "#fff",
  border: "none",
  borderRadius: "12px",
  cursor: "pointer",
  fontWeight: "600",
  fontSize: "16px",
};

export default AddExpenseScreen;