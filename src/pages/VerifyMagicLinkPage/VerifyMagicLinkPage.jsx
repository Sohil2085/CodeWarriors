import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import useAuthStore from "../../stores/useAuthStore";
import { User, Eye, EyeOff, Lock, Upload, Key, CheckCircle, AlertTriangle } from "lucide-react";
import API from "../../utils/api";
import { toast } from "react-toastify";
import AOS from "aos";
import 'aos/dist/aos.css';

const VerifyMagicLinkPage = () => {
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");
    const navigate = useNavigate();
    const { login } = useAuthStore();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [profileImage, setProfileImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true });
        if (!token) {
            toast.error("Invalid verification link.");
            navigate("/signup");
        }
    }, [token, navigate]);

    const handleCompleteSignup = async (e) => {
        e.preventDefault();
        if (!username || !password) {
            toast.error("Please fill in all required fields");
            return;
        }

        setIsLoading(true);
        try {
            const formData = new FormData();
            formData.append("token", token);
            formData.append("username", username);
            formData.append("password", password);
            if (profileImage) {
                formData.append("profileImage", profileImage);
            }

            const res = await API.post("/auth/register/verify-magic-link", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            login(res.data.user);
            toast.success("Account created successfully!");
            navigate("/dashboard");

        } catch (err) {
            toast.error(err.response?.data?.error || "Verification failed");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
            <div className="container p-4" style={{ maxWidth: "500px" }}>
                <div className="card shadow-lg border-0" data-aos="zoom-in">
                    <div className="card-body p-5">
                        <div className="text-center mb-4">
                            <div className="bg-primary bg-opacity-10 text-primary rounded-circle d-inline-flex p-3 mb-3">
                                <Key size={32} />
                            </div>
                            <h3>Complete Your Profile</h3>
                            <p className="text-muted">Set up your details to finish signing up.</p>
                        </div>

                        <form onSubmit={handleCompleteSignup}>
                            <div className="mb-3">
                                <label className="form-label">Username</label>
                                <div className="input-group">
                                    <span className="input-group-text bg-white"><User size={18} className="text-muted" /></span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Choose a username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <div className="input-group">
                                    <span className="input-group-text bg-white"><Lock size={18} className="text-muted" /></span>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className="form-control"
                                        placeholder="Create a strong password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="form-label">Profile Image (Optional)</label>
                                <div className="input-group">
                                    <input
                                        type="file"
                                        className="form-control"
                                        accept="image/*"
                                        onChange={(e) => setProfileImage(e.target.files[0])}
                                    />
                                </div>
                                {profileImage && (
                                    <div className="mt-2 text-center">
                                        <img
                                            src={URL.createObjectURL(profileImage)}
                                            alt="Preview"
                                            className="rounded-circle object-fit-cover border"
                                            width="80"
                                            height="80"
                                        />
                                    </div>
                                )}
                            </div>

                            <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold" disabled={isLoading}>
                                {isLoading ? (
                                    <>
                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                        Creating Account...
                                    </>
                                ) : (
                                    "Complete Registration"
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerifyMagicLinkPage;
