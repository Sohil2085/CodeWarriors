import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../../stores/useAuthStore";
import { Eye, Mail, User,EyeOff, Lock} from "lucide-react";
import CodeBackground from '../../components/image/image';
import "./SignupPage.css";

const SignupPage = () => {
  const { user, isAuthenticated, signup } = useAuthStore();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  console.log("User:", user);
  console.log("isAuthenticated:", isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleSignup = (e) => {
    e.preventDefault();
    signup(username, email, password);
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-dark text-light">
      <div className="container p-4 rounded shadow-lg bg-dark d-flex flex-column flex-md-row">
        {/* Login Form */}
        <div className="flex-fill p-4">
          <div className="text-center mb-4">
            <div className="mb-2">
              <User size={32} strokeWidth={1.5} />
            </div>
            <h2>Welcome</h2>
            <p>Sign up to your account</p>
          </div>
          <form onSubmit={handleSignup}>
            <div className="mb-3">
              <label>Username</label>
              <div className="input-group">
                <span className="input-group-text">
                  <User size={16} />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-3">
              <label>Email</label>
              <div className="input-group">
                <span className="input-group-text">
                  <Mail size={16} />
                </span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-3">
            <label>Password</label>
            <div className="input-group">
              <span className="input-group-text">
                <Lock size={16} />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="input-group-text"
                role="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </span>
            </div>
          </div>
            <button type="submit" className="btn btn-primary w-100">
              Sign up
            </button>
          </form>
          <div className="mt-3 text-center">
            Already have an account? <Link to={'/login'}>Sign in</Link>
          </div>
        </div>

        {/* Right Side - Code Snippet */}
        <CodeBackground
        title={"Welcome to our platform!"}
        subtitle={
          "Sign up to access our platform and start using our services."
        }
      />
      </div>
    </div>
  );
};

export default SignupPage;
