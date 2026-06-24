import Sidebar from "../components/Sidebar";

function DashboardScreen() {
  const budget = Number(
    localStorage.getItem("budget") || 0
  );

  const expenses =
    JSON.parse(localStorage.getItem("expenses")) || [];

  const totalExpenses = expenses.reduce(
    (sum, expense) => sum + Number(expense.amount),
    0
  );

  const remainingBalance = budget - totalExpenses;
  const recentExpenses = expenses.slice(-5).reverse();
  const progressPercentage =
    budget > 0 ? (totalExpenses / budget) * 100 : 0;

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar />

      <main style={mainContent}>
        <header style={{ marginBottom: "30px" }}>
          <h1 style={{ color: "#111827", margin: "0 0 5px" }}>
            Welcome Back 👋
          </h1>
          <p style={{ color: "#6B7280", margin: 0 }}>
            Track your expenses and manage your budget.
          </p>
        </header>

        <div style={summaryGrid}>
          <SummaryCard label="Total Budget" value={`₹${budget}`} />
          <SummaryCard label="Total Expenses" value={`₹${totalExpenses}`} />
          <SummaryCard label="Balance Left" value={`₹${remainingBalance}`} />
        </div>

        <section style={sectionCard}>
          <h2 style={sectionTitle}>Budget Usage</h2>
          <div style={progressTrack}>
            <div
              style={{
                ...progressValue,
                width: `${Math.min(progressPercentage, 100)}%`,
              }}
            />
          </div>
          <p style={{ margin: "10px 0 0", color: "#6B7280" }}>
            ₹{totalExpenses} of ₹{budget} used
          </p>
        </section>

        <div style={miniGrid}>
          <MiniCard label="Food" value="₹3,000" />
          <MiniCard label="Travel" value="₹2,500" />
          <MiniCard label="Shopping" value="₹4,000" />
        </div>

        <div style={detailsGrid}>
          <section style={sectionCard}>
            <h2 style={sectionTitle}>Recent Expenses</h2>
            {recentExpenses.length === 0 ? (
              <p>No expenses added yet</p>
            ) : (
              recentExpenses.map((expense) => (
                <ExpenseItem
                  key={expense.id}
                  label={`${expense.category} - ${expense.title}`}
                  value={`₹${expense.amount}`}
                />
              ))
            )}
          </section>

          <div style={{ display: "grid", gap: "20px" }}>
            <section style={sectionCard}>
              <h2 style={sectionTitle}>Quick Stats</h2>
              <p>Food: 35%</p>
              <p>Travel: 25%</p>
              <p style={{ marginBottom: 0 }}>Shopping: 40%</p>
            </section>
            <section style={sectionCard}>
              <h2 style={sectionTitle}>Recent Activity</h2>
              <p>🍔 Food Expense Added</p>
              <p>🚕 Travel Expense Added</p>
              <p style={{ marginBottom: 0 }}>💰 Budget Updated</p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

function SummaryCard({ label, value }) {
  return (
    <div style={summaryCard}>
      <p style={cardLabel}>{label}</p>
      <h2 style={cardValue}>{value}</h2>
    </div>
  );
}

function MiniCard({ label, value }) {
  return (
    <div style={miniCard}>
      <h3 style={{ margin: "0 0 8px" }}>{label}</h3>
      <p style={miniValue}>{value}</p>
    </div>
  );
}

function ExpenseItem({ label, value }) {
  return (
    <div style={expenseItem}>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

const mainContent = {
  flex: 1,
  padding: "35px",
  background: "#F8FAFC",
  minWidth: 0,
};

const summaryGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: "20px",
  marginBottom: "30px",
};

const summaryCard = {
  background: "#FFFFFF",
  padding: "25px",
  borderRadius: "20px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
};

const sectionCard = {
  background: "#FFFFFF",
  padding: "25px",
  borderRadius: "20px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
};

const expenseItem = {
  display: "flex",
  justifyContent: "space-between",
  padding: "14px 0",
  borderBottom: "1px solid #E5E7EB",
  color: "#374151",
};

const miniCard = {
  background: "#fff",
  padding: "20px",
  borderRadius: "15px",
  textAlign: "center",
  boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
};

const miniGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: "20px",
  margin: "20px 0 30px",
};

const detailsGrid = {
  display: "grid",
  gridTemplateColumns: "1.5fr 1fr",
  gap: "20px",
};

const progressTrack = {
  width: "100%",
  height: "15px",
  background: "#E5E7EB",
  borderRadius: "20px",
  overflow: "hidden",
  marginTop: "15px",
};

const progressValue = {
  height: "100%",
  background: "linear-gradient(90deg,#2563EB,#60A5FA)",
  borderRadius: "20px",
};

const cardLabel = {
  color: "#6B7280",
  margin: "0 0 10px",
};

const cardValue = {
  color: "#111827",
  margin: 0,
};

const sectionTitle = {
  color: "#111827",
  margin: "0 0 15px",
};

const miniValue = {
  color: "#2563EB",
  fontSize: "20px",
  fontWeight: "700",
  margin: 0,
};

export default DashboardScreen;
