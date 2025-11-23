import React from "react";
import ProfilePic from "../../assets/profile.png";
import "./ProfilePage.css";
import { Link } from "react-router-dom";
import Navbar_Home from "../../components/Navbar/Navbar_Home";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Doughnut, Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import questionsData from "../../data/questionsData.json";
import { color } from "framer-motion";
import API from "../../utils/api";
import useAuthStore from "../../stores/useAuthStore";

Chart.register(ArcElement, ChartDataLabels, Tooltip);
const centerTextPlugin = {
  id: "centerText",
  beforeDraw(chart) {
    const { width, height } = chart;
    const ctx = chart.ctx;
    ctx.restore();

    const dataset = chart.data.datasets[0].data;
    const total = dataset.reduce((acc, val) => acc + val, 0);

    const fontSize = (height / 150).toFixed(2);
    ctx.font = `${fontSize}em sans-serif`;
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#212529";

    const text = `Total: ${total}`;
    const textX = Math.round((width - ctx.measureText(text).width) / 2);
    const textY = height / 2;

    ctx.fillText(text, textX, textY);
    ctx.save();
  },
};

const ProfilePage = () => {
  const chartData = {
    labels: questionsData.map((data) => data.label),
    datasets: [
      {
        label: "Questions",
        data: questionsData.map((data) => data.value),
        backgroundColor: ["#1cbaba", "#ffb700", "#f53636"],
        borderColor: ["green", "yellow", "red"],
      },
    ],
  };

  const options = {
    plugins: {
      datalabels: {
        display: false, // we hide numbers inside chart slices for now
      },
      legend: {
        position: "top",
        labels: {
          color: "#212529",
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label || "";
            const value = context.raw || 0;
            return `${label}: ${value} solved`;
          },
        },
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        titleColor: "#212529",
        bodyColor: "#212529",
        borderColor: "#0d6efd",
        borderWidth: 1,
      },
    },
    cutout: "80%", // size of the center hole
    responsive: true,
    maintainAspectRatio: false,

    hoverOffset: 20, // Makes slices pop out slightly on hover
    interaction: {
      mode: "nearest",
      intersect: true,
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
  };

  const { user } = useAuthStore();
  const [userName, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      // Global settings
      duration: 700, // Animation duration
      easing: "ease-out-cubic", // Animation easing
      once: true, // Only animate once
      disable: "phone", // Disable on phone
    });
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await API.get("/user/me"); // Token is auto-attached
        setUser(res.data);
        console.log(res.name);
      } catch (err) {
        console.log("Failed to fetch user:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading) return <div>Loading ....</div>;

  return (
    <>
      <Navbar_Home />
      <section className="custom_container pt-5">
        <div className="container">
          <div className="row gx-4">
            <div className="col first_col p-5" data-aos="flip-left">
              <div
                className="name d-flex justify-content-between"
                data-aos="fade-up" style={{ flexDirection: "column" }}
              >
                <figure className="picture">
                  <img
                    src={`http://localhost:8080/uploads/${user.image}`}
                    alt=""
                  />
                </figure>
                <div className="d-flex flex-column">
                  <strong className="fw-bold">
                    {userName?.name || "Username"}
                  </strong>
                  {userName ? (
                    <>
                      <span>
                        <strong>Name:</strong> {userName.name}
                      </span>
                      <span>
                        <strong>Email:</strong> {userName.email}
                      </span>
                    </>
                  ) : (
                    <span>User data could not be loaded.</span>
                  )}
                </div>
              </div>
              <div className="edit_profile pt-1" data-aos="fade-up">
                <button className="btn btn-outline-primary w-100">
                  Edit Profile
                </button>
              </div>
              <hr />
              <div className="language" data-aos="fade-up">
                <h3 className="fw-bold">Language</h3>
                <button className="btn btn-outline-secondary me-2 mt-2">
                  Java
                </button>
                <button className="btn btn-outline-secondary me-2 mt-2">
                  Javascript
                </button>
                <button className="btn btn-outline-secondary me-2 mt-2">
                  Python
                </button>
                <button className="btn btn-outline-secondary me-2 mt-2">
                  C++
                </button>
              </div>
            </div>
            <div className="col-8 ">
              <div className="row">
                <div
                  className="d-flex  col p-4 rounded ms-4"
                  style={{ background: "#f8f9fa", border: "1px solid #dee2e6" }}
                >
                  <div className="" style={{ overflow: "visible" }}>
                    <Doughnut
                      data={chartData}
                      options={options}
                      plugins={[ChartDataLabels, centerTextPlugin]}
                    />
                  </div>
                  <div className="info">
                    <ul className="d-flex flex-column gap-2">
                      <li
                        className="rounded pt-1 pb-1 ps-4 pe-4"
                        style={{ background: "#d4edda", color: "#155724", border: "1px solid #c3e6cb" }}
                        data-aos="fade-up"
                      >
                        Easy<br></br>
                        <small>50/880</small>
                      </li>
                      <li
                        className="rounded pt-1 pb-1 ps-4 pe-4"
                        style={{ background: "#fff3cd", color: "#856404", border: "1px solid #ffeaa7" }}
                        data-aos="fade-up"
                      >
                        Medium<br></br>
                        <small>75/1858</small>
                      </li>
                      <li
                        className="rounded pt-1 pb-1 ps-4 pe-4"
                        style={{ background: "#f8d7da", color: "#721c24", border: "1px solid #f5c6cb" }}
                        data-aos="fade-up"
                      >
                        Hard<br></br>
                        <small>25/842</small>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfilePage;
