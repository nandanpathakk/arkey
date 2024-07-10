import { login } from "../helpers/login";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { getKeyParts } from "../helpers/getKeyParts";

interface CustomJwtPayload {
  email: string;
}

const ArweaveMPCLogin = () => {
  return (
    <div>
      <div
        style={{
          maxWidth: "28rem",
          margin: "5rem auto",
          padding: "1.5rem",
          backgroundColor: "white",
          border: "1px solid #d1d5db",
          borderRadius: "0.75rem",
          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2
          style={{
            fontSize: "1.875rem",
            fontWeight: 700,
            textAlign: "center",
            marginBottom: "1.5rem",
            color: "#1f2937",
          }}
        >
          Authentication
        </h2>
        <div style={{ marginBottom: "1rem" }}>
          <label
            style={{
              display: "block",
              color: "#4b5563",
              fontSize: "0.875rem",
              fontWeight: 700,
              marginBottom: "0.5rem",
            }}
          >
            Email Address
          </label>
          <input
            style={{
              appearance: "none",
              border: "1px solid #d1d5db",
              borderRadius: "0.375rem",
              width: "100%",
              padding: "0.5rem 0.75rem",
              color: "#4b5563",
              lineHeight: "1.25",
              outline: "none",
              boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.5)",
            }}
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div style={{ marginBottom: "1.5rem" }}>
          <label
            style={{
              display: "block",
              color: "#4b5563",
              fontSize: "0.875rem",
              fontWeight: 700,
              marginBottom: "0.5rem",
            }}
          >
            Password
          </label>
          <input
            style={{
              appearance: "none",
              border: "1px solid #d1d5db",
              borderRadius: "0.375rem",
              width: "100%",
              padding: "0.5rem 0.75rem",
              color: "#4b5563",
              lineHeight: "1.25",
              outline: "none",
              boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.5)",
              marginBottom: "0.75rem",
            }}
            type="password"
            placeholder="Enter your password"
          />
          <p
            style={{
              fontSize: "0.875rem",
              color: "#3b82f6",
              cursor: "pointer",
            }}
          >
            Forgot Password?
          </p>
        </div>
        <button
          style={{
            backgroundColor: "#000000",
            color: "#ffffff",
            fontWeight: 700,
            padding: "0.5rem 1rem",
            borderRadius: "0.375rem",
            width: "100%",
            marginBottom: "1rem",
            outline: "none",
            boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.5)",
            cursor: "pointer",
          }}
          onMouseEnter={(e) =>
            ((e.target as HTMLElement).style.backgroundColor = "#374151")
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLElement).style.backgroundColor = "#000000")
          }
        >
          Login
        </button>
        <div
          style={{
            textAlign: "center",
            marginBottom: "0.5rem",
            color: "#4b5563",
          }}
        >
          OR
        </div>
        <GoogleLogin
          onSuccess={async (credentialResponse) => {
            console.log(jwtDecode(credentialResponse.credential as string));
            const data = jwtDecode(
              credentialResponse.credential as string
            ) as CustomJwtPayload;
            await login(data.email);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
    </div>
  );
};

export default ArweaveMPCLogin;
