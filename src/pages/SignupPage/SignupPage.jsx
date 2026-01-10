import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../../stores/useAuthStore";
import { Mail, ArrowRight } from "lucide-react";
import CodeBackground from '../../components/image/image';
import "./SignupPage.css";
import API from "../../utils/api";
import BASE_URL from '../../utils/url';

import AOS from "aos";
import 'aos/dist/aos.css';
import { toast } from "react-toastify";

const SignupPage = () => {

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      disable: 'phone',
    });
  }, []);

  const { isAuthenticated } = useAuthStore();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleRequestMagicLink = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setIsLoading(true);
    try {
      await API.post("/auth/register/request-magic-link", { email });
      setIsSent(true);
      toast.success("Magic link sent to your email!");
    } catch (err) {
      toast.error(err.response?.data?.error || "Failed to send magic link");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light text-dark">
      <div className="container p-4 rounded shadow-lg bg-light d-flex flex-column flex-md-row">
        {/* Signup Form */}
        <div className="flex-fill p-4" data-aos="fade-right">
          <div className="text-center mb-4">
            <h2 data-aos="fade-up">Welcome</h2>
            <p data-aos="fade-up">Sign up with a magic link</p>
          </div>

          {!isSent ? (
            <form onSubmit={handleRequestMagicLink}>
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

              <button type="submit" className="btn btn-primary w-100" disabled={isLoading}>
                {isLoading ? "Sending Magic Link..." : "Send Magic Link"}
              </button>
            </form>
          ) : (
            <div className="text-center">
              <div className="alert alert-success">
                <Mail size={48} className="mb-3" />
                <h4>Check your email!</h4>
                <p>We've sent a magic link to <strong>{email}</strong>.</p>
                <p className="small">Click the link in the email to complete your registration.</p>
              </div>
              <button className="btn btn-outline-secondary btn-sm mt-3" onClick={() => setIsSent(false)}>
                Use a different email
              </button>
            </div>
          )}

          <div className="mt-3 text-center">
            Don't have an account? <Link to={'/login'}>Sign in</Link>
          </div>

          <div className="text-center mt-3 pb-4">
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
              Sign up with Google
            </button>
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
