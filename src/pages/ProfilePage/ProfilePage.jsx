import React from 'react'
import ProfilePic from '../../assets/profile.png'
import './ProfilePage.css'
import { Link } from 'react-router-dom'
import Navbar_Home from '../../components/Navbar/Navbar_Home'
import { useEffect } from 'react'
import AOS from "aos";
import 'aos/dist/aos.css';
import { Doughnut, Pie } from 'react-chartjs-2'
import { Chart,ArcElement, Tooltip } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import questionsData from '../../data/questionsData.json'


Chart.register(ArcElement, ChartDataLabels, Tooltip)
const centerTextPlugin = {
  id: 'centerText',
  beforeDraw(chart) {
    const { width, height } = chart;
    const ctx = chart.ctx;
    ctx.restore();

    const dataset = chart.data.datasets[0].data;
    const total = dataset.reduce((acc, val) => acc + val, 0);

    const fontSize = (height / 150).toFixed(2);
    ctx.font = `${fontSize}em sans-serif`;
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#ffffff';

    const text = `Total: ${total}`;
    const textX = Math.round((width - ctx.measureText(text).width) / 2);
    const textY = height / 2;

    ctx.fillText(text, textX, textY);
    ctx.save();
  }
};

const ProfilePage = () => {

  const chartData = {
    labels : questionsData.map((data) => data.label),
    datasets : [
      {
        label : "Questions",
        data : questionsData.map((data) => data.value),
        backgroundColor : ["#1cbaba","#ffb700","#f53636"],
        borderColor : ["green","yellow","red"],
      },
    ],
  }

  const options = {
  plugins: {
    datalabels: {
      display: false, // we hide numbers inside chart slices for now
    },
    legend: {
      position: 'top',
      labels: {
        color: '#fff',
        font: {
          size: 14,
        },
      },
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          const label = context.label || '';
          const value = context.raw || 0;
          return `${label}: ${value} solved`;
        }
      },
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      titleColor: '#fff',
      bodyColor: '#fff',
      borderColor: '#00fff7',
      borderWidth: 1,
    }
  },
  cutout: '80%', // size of the center hole
  responsive: true,
  maintainAspectRatio: false,

  hoverOffset: 10, // Makes slices pop out slightly on hover
  interaction: {
    mode: 'nearest',
    intersect: true
  },
  animation: {
    animateScale: true,
    animateRotate: true,
  }
};


  useEffect(() => {
         AOS.init({
         // Global settings
         duration: 700, // Animation duration
           easing: 'ease-out-cubic', // Animation easing
           once: true, // Only animate once
           disable: 'phone', // Disable on phone
         });
       }, []);

  return (
    <>
    <Navbar_Home />
    <section className="custom_container pt-5">
      <div className="container">
        <div className="row gx-4">
          <div className="col first_col p-5" data-aos="flip-left">
            <div className="name d-flex justify-content-between" data-aos="fade-up">
            <figure className="picture">
              <img src={ProfilePic} alt="" />
            </figure>
            <p className='d-flex flex-column'><strong className='fw-bold'>Sohil Kareliya</strong>
              <span className='text-secondary'><small>sohil_2085</small></span>
              <span>Rank : 000001</span>
            </p>
            </div>
            <div className="edit_profile" data-aos="fade-up">
              <button className='btn btn-outline-primary w-100'>Edit Profile</button>
            </div>
            <hr />
            <div className="language" data-aos="fade-up">
              <h3 className='fw-bold'>Language</h3>
              <button className="btn btn-outline-secondary me-2 mt-2">Java</button>
              <button className="btn btn-outline-secondary me-2 mt-2">Javascript</button>
              <button className="btn btn-outline-secondary me-2 mt-2">Python</button>
              <button className="btn btn-outline-secondary me-2 mt-2">C++</button>
            </div>
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col p-3" style={{height : '300px'}}>
              <Doughnut data={chartData} options={options} plugins={[ChartDataLabels, centerTextPlugin]} />
              </div>
              <div className="col"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default ProfilePage  