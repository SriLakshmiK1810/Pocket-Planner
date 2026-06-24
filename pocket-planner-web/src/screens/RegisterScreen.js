import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function RegisterScreen() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    const user = {
      name,
      email,
      password,
    };

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    alert("Registration Successful!");

    navigate("/");
  };

  return (
    <div
      style={{
        maxWidth: "450px",
        margin: "100px auto",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 0 15px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#2563EB",
        }}
      >
        Create Account
      </h1>

      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
        style={inputStyle}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
        style={inputStyle}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
        style={inputStyle}
      />

      <button
        style={buttonStyle}
        onClick={handleRegister}
      >
        Register
      </button>

      <p
        style={{
          textAlign: "center",
          marginTop: "15px",
        }}
      >
        Already have an account?{" "}
        <Link
          to="/"
          style={{
            color: "#2563EB",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Login
        </Link>
      </p>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "12px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  boxSizing: "border-box",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  backgroundColor: "#2563EB",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

export default RegisterScreen;