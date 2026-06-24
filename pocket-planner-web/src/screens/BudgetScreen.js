import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";

function BudgetScreen() {
  const [budget, setBudget] = useState("");

  useEffect(() => {
    const savedBudget =
      localStorage.getItem("budget");

    if (savedBudget) {
      setBudget(savedBudget);
    }
  }, []);

  const handleBudgetUpdate = () => {
    localStorage.setItem(
      "budget",
      budget
    );

    alert("Budget Updated Successfully!");
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <main style={mainContent}>
        <h1 style={{ margin: 0, color: "#111827" }}>
          Budget Settings
        </h1>

        <div style={budgetCard}>
          <label
            style={{
              color: "#374151",
              fontWeight: "600",
            }}
          >
            Monthly Budget
          </label>

          <input
            type="number"
            value={budget}
            onChange={(e) =>
              setBudget(e.target.value)
            }
            placeholder="Enter Budget"
            style={inputStyle}
          />

          <button
            onClick={handleBudgetUpdate}
            style={buttonStyle}
          >
            Update Budget
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

const budgetCard = {
  background: "#fff",
  padding: "30px",
  borderRadius: "20px",
  maxWidth: "600px",
  marginTop: "20px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
};

const inputStyle = {
  width: "100%",
  boxSizing: "border-box",
  padding: "14px",
  marginTop: "10px",
  marginBottom: "20px",
  borderRadius: "12px",
  border: "1px solid #E5E7EB",
};

const buttonStyle = {
  background:
    "linear-gradient(135deg,#2563EB,#3B82F6)",
  color: "#fff",
  border: "none",
  padding: "14px 25px",
  borderRadius: "12px",
  cursor: "pointer",
};

export default BudgetScreen;