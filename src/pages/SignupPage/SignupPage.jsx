import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../../stores/useAuthStore";
import { Eye, Mail, User,EyeOff, Lock, ArrowLeft, Shield} from "lucide-react";
import CodeBackground from '../../components/image/image';
import "./SignupPage.css"; 
import API from "../../utils/api";

import AOS from "aos";
import 'aos/dist/aos.css';
import { toast } from "react-toastify";

const SignupPage = () => {

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
  const [profileImage, setProfileImage] = useState(null);
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1); // 1: Request OTP, 2: Verify OTP
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  console.log("User:", user);
  console.log("isAuthenticated:", isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleRequestOTP = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setIsLoading(true);
    try {
      await API.post("/auth/register/request-otp", { email });
      toast.success("OTP sent to your email!");
      setStep(2);
    } catch (err) {
      toast.error(err.response?.data?.error || "Failed to send OTP");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    if (!otp || otp.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP");
      return;
    }

    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("code", otp);
      formData.append("username", username);
      formData.append("password", password);
      if (profileImage) {
        formData.append("profileImage", profileImage);
      }

      const res = await API.post("/auth/register/verify-otp", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      login(res.data.user); // Zustand
      toast.success("Signup successful!");
      navigate("/");
    } catch (err) {
      toast.error(err.response?.data?.error || "OTP verification failed");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToStep1 = () => {
    setStep(1);
    setOtp("");
  };

  
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-dark text-light">
      <div className="container p-4 rounded shadow-lg bg-dark d-flex flex-column flex-md-row">
        {/* Signup Form */}
        <div className="flex-fill p-4" data-aos="fade-right">
          <div className="text-center mb-4">
            <div className="mb-2" data-aos="fade-up">
              {step === 1 ? <User size={32} strokeWidth={1.5} /> : <Shield size={32} strokeWidth={1.5} />}
            </div>
            <h2 data-aos="fade-up">{step === 1 ? "Welcome" : "Verify Email"}</h2>
            <p data-aos="fade-up">
              {step === 1 ? "Sign up to your account" : `Enter the 6-digit code sent to ${email}`}
            </p>
          </div>

          {step === 1 ? (
            <form onSubmit={handleRequestOTP}>
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
                    required
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
                    required
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
                    required
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
              <div className="mb-3">
                <label>Profile Image</label>
                <input
                  type="file"
                  accept="image/*"
                  className="form-control"
                  onChange={(e) => setProfileImage(e.target.files[0])}
                />
                {profileImage && (
                  <div className="mt-2">
                    <img
                      src={URL.createObjectURL(profileImage)}
                      alt="Preview"
                      className="img-thumbnail"
                      style={{ maxWidth: '120px', maxHeight: '120px' }}
                    />
                  </div>
                )}
              </div>
              <button type="submit" className="btn btn-primary w-100" disabled={isLoading}>
                {isLoading ? "Sending OTP..." : "Send OTP"}
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOTP}>
              <div className="mb-3">
                <label>Enter OTP</label>
                <div className="input-group">
                  <span className="input-group-text">
                    <Shield size={16} />
                  </span>
                  <input
                    type="text"
                    className="form-control text-center"
                    placeholder="000000"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                    maxLength={6}
                    required
                  />
                </div>
                <small className="text-muted">Check your email for the 6-digit code</small>
              </div>
              <div className="d-flex gap-2">
                <button type="button" className="btn btn-outline-secondary flex-fill" onClick={handleBackToStep1}>
                  <ArrowLeft size={16} className="me-1" />
                  Back
                </button>
                <button type="submit" className="btn btn-primary flex-fill" disabled={isLoading}>
                  {isLoading ? "Verifying..." : "Verify & Sign Up"}
                </button>
              </div>
            </form>
          )}
          <div className="mt-3 text-center">
            Already have an account? <Link to={'/login'}>Sign in</Link>
          </div>
        </div>

        {/* Right Side - Code Snippet */}
        <div data-aos="fade-left">
        <CodeBackground
        title={"Welcome to our platform!"}
        subtitle={
          "Sign up to access our platform and start using our services."
        }
        />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
