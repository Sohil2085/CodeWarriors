import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuthStore from "../../stores/useAuthStore";
import { Eye, Mail, User,EyeOff, Lock} from "lucide-react";
import CodeBackground from '../../components/image/image';
import "./LoginPage.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import API from "../../utils/api"


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
    <div className="home container-fluid text-end p-4" style={{background : '#212529'}}>
      <div className="container">
        <Link to={'/'} className="me-3 text-decoration-none glow_button">Home</Link>
      </div>
    </div>
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-dark text-light">
      <div className="container p-4 rounded shadow-lg bg-dark d-flex flex-column flex-md-row">
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
