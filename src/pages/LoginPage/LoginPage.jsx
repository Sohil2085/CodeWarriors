import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuthStore from "../../stores/useAuthStore";
import { Eye, Mail, User, EyeOff, Lock } from "lucide-react";
import CodeBackground from '../../components/image/image';
import "./LoginPage.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import API from "../../utils/api"
import BASE_URL from '../../utils/url';


import AOS from "aos";
import 'aos/dist/aos.css';



const LoginPage = () => {

  // const location = useLocation()

  useEffect(() => {
    AOS.init({
      // Global settings
      duration: 700, // Animation duration
      easing: 'ease-out-cubic', // Animation easing
      once: true, // Only animate once
      disable: 'phone', // Disable on phone
    });
  }, []);

  const { user, isAuthenticated, login } = useAuthStore();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  console.log("User:", user);
  console.log("isAuthenticated:", isAuthenticated);


  // useEffect(() => {
  //   const fromLogout = location.state?.fromLogout

  //   if(fromLogout){
  //     toast.success("Logout Successfully..")
  //     window.history.replaceState({},document.title)
  //   }
  // },[location.state?.fromLogout])

  useEffect(() => {
    if (isAuthenticated) {
      // navigate("/", { state: { fromLogin: true } })
      navigate("/")
    }
  }, [isAuthenticated]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", { email, password });

      localStorage.setItem("token", res.data.token);
      login(res.data.user); // Zustand login()

      navigate("/"); // Redirect after login
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <>
      <div className="home container-fluid text-end p-4" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <Link to={'/'} className="me-3 text-decoration-none glow_button">Home</Link>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light text-dark">
        <div className="container p-4 rounded shadow-lg bg-light d-flex flex-column flex-md-row">
          {/* Login Form */}
          <div className="flex-fill p-4" data-aos="fade-up-right">
            <div className="text-center mb-4">
              <div className="mb-2" data-aos="fade-up">
                <User size={32} strokeWidth={1.5} />
              </div>
              <h2 data-aos="fade-up">Welcome Back</h2>
              <p data-aos="fade-up">Sign in to your account</p>
            </div>
            <form onSubmit={handleLogin}>

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
              <button type="submit" className="btn btn-primary w-100" >
                Sign in
              </button>
            </form>
            <div className="mt-3 text-center">
              Don't have an account? <Link to={'/signup'}>Create account</Link>
            </div>

            <div className="text-center mt-3">
              <button
                type="button"
                className="btn btn-light w-100 d-flex align-items-center justify-content-center border shadow-sm"
                style={{ padding: '10px', borderRadius: '25px', fontSize: '16px', fontWeight: '500' }}
                onClick={() => window.location.href = `${BASE_URL}/api/v1/auth/google`}
              >
                <svg className="me-2" width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                Sign in with Google
              </button>
            </div>
          </div>

          {/* Right Side - Code Snippet */}
          <div data-aos="fade-up-left">
            <CodeBackground
              title={"Welcome to our platform!"}
              subtitle={
                "Sign in to access our platform and start using our services."
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
