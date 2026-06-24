import Sidebar from "../components/Sidebar";

function ExpenseListScreen() {
  const expenses =
    JSON.parse(localStorage.getItem("expenses")) || [];

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <main style={mainContent}>
        <h1 style={{ margin: "0 0 25px", color: "#111827" }}>
          Expense List
        </h1>

        {expenses.length === 0 ? (
          <div style={emptyState}>
            <h3 style={{ margin: 0 }}>No Expenses Added Yet</h3>
          </div>
        ) : (
          <div style={tableCard}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#EFF6FF" }}>
                  <th style={tableHead}>Title</th>
                  <th style={tableHead}>Category</th>
                  <th style={tableHead}>Amount</th>
                  <th style={tableHead}>Date</th>
                  <th style={tableHead}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {expenses.map((expense) => (
                  <tr key={expense.id}>
                    <td style={tableCell}>{expense.title}</td>
                    <td style={tableCell}>{expense.category}</td>
                    <td style={tableCell}>₹{expense.amount}</td>
                    <td style={tableCell}>{expense.date}</td>
                    <td style={tableCell}>
                      <button style={editBtn}>Edit</button>
                      <button style={deleteBtn}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}

const mainContent = {
  flex: 1,
  padding: "35px",
  background: "#F8FAFC",
  minWidth: 0,
};

const tableCard = {
  background: "#fff",
  borderRadius: "20px",
  overflowX: "auto",
  boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
};

const emptyState = {
  background: "#fff",
  padding: "35px",
  borderRadius: "20px",
  color: "#6B7280",
  textAlign: "center",
  boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
};

const tableHead = {
  padding: "15px",
  textAlign: "left",
  color: "#374151",
};

const tableCell = {
  padding: "15px",
  borderBottom: "1px solid #E5E7EB",
  color: "#4B5563",
  whiteSpace: "nowrap",
};

const editBtn = {
  background: "#3B82F6",
  color: "#fff",
  border: "none",
  padding: "8px 12px",
  borderRadius: "8px",
  marginRight: "8px",
  cursor: "pointer",
};

const deleteBtn = {
  background: "#EF4444",
  color: "#fff",
  border: "none",
  padding: "8px 12px",
  borderRadius: "8px",
  cursor: "pointer",
};

export default ExpenseListScreen;
