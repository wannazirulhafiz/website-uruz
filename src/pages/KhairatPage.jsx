// src/pages/KhairatPage.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Home, Building, Users, CreditCard, Check, Twitter, Facebook, Instagram, BarChart2, Bell, Shield } from 'lucide-react';
import ustImage from "../assets/images/ustaz.png";
import dashboardImage from "../assets/images/dashboarduruz.jpg";
import masjidamanImage from "../assets/images/masjidaman.jpg";
import masjidseripermaiImage from "../assets/images/masjidseripermai.jpg"
import { Navigation } from "../components/layout/Navigation";
import { Footer } from "../components/layout/Footer";

const HeroSection = () => {
  return (
    <div className="relative pt-24 pb-12 overflow-hidden bg-white md:pt-28">
      {/* Background pattern overlay - keeping original pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center md:flex-row md:justify-between md:space-x-8">
          {/* Text Content Side */}
          <div className="order-2 w-full space-y-5 text-center md:w-1/2 md:text-left md:order-1">
            <div className="space-y-4">
              {/* Tag */}
              <div className="inline-block px-4 py-1.5 rounded-lg bg-nusuk-primary/10">
                <p className="text-sm font-medium text-nusuk-primary">
                  Sistem Khairat Digital No 1 Di Malaysia
                </p>
              </div>
              
              {/* Headings */}
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-nusuk-primary md:text-4xl">
                  All-in-one
                </h2>
                <h1 className="text-4xl font-bold text-nusuk-dark md:text-5xl">
                  Sistem URUZ Khairat
                </h1>
              </div>
              
              {/* Description */}
              <p className="text-lg text-nusuk-dark/70 md:text-xl">
                Solusi Mudah untuk pengurusan digital bagi khairat kematian
              </p>
            </div>

            {/* Stats/Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 pt-2 md:justify-start">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-nusuk-primary"></div>
                <span className="text-sm text-nusuk-dark/70 md:text-base">7+ Masjid</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-nusuk-primary/80"></div>
                <span className="text-sm text-nusuk-dark/70 md:text-base">13+ Surau</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-nusuk-primary/60"></div>
                <span className="text-sm text-nusuk-dark/70 md:text-base">3,415+ Ahli</span>
              </div>
            </div>
          </div>

          {/* Image Side - Keeping same layout */}
          <div className="order-1 w-full mb-6 md:w-1/2 md:mb-0 md:order-2">
            <div className="relative max-w-lg mx-auto">
              <div className="absolute -translate-x-1/2 -translate-y-1/2 -z-10 top-1/2 left-1/2">
                <div className="w-64 h-64 rounded-full bg-nusuk-primary/10 blur-2xl"></div>
              </div>
              <img
                src={ustImage}
                alt="Khairat System Interface"
                className="relative z-10 w-full h-auto shadow-lg rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Social Media Links - Hidden on Mobile */}
        <div className="fixed right-0 z-50 hidden -translate-y-1/2 top-1/2 md:block">
          <div className="flex flex-col items-center px-3 py-4 space-y-4 rounded-l-lg shadow-lg bg-white/90">
            <a href="#" className="transition-colors text-nusuk-dark/60 hover:text-nusuk-primary">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="transition-colors text-nusuk-dark/60 hover:text-nusuk-primary">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="transition-colors text-nusuk-dark/60 hover:text-nusuk-primary">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const WhyChooseSection = () => {
  return (
    <div className="py-16 bg-white md:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header with Vertical Line */}
        <div className="flex flex-col gap-8 mb-16 md:flex-row md:gap-16">
          {/* Left side - Title */}
          <div className="w-full md:w-1/3">
            <div className="text-center md:text-left">
              <span className="inline-block mb-4 text-sm font-semibold tracking-wider uppercase text-nusuk-primary">
                KENAPA PILIH
              </span>
              <h2 className="text-3xl font-bold leading-tight text-nusuk-dark md:text-4xl">
                Mengapa Masjid Pilih URUZ Khairat
              </h2>
            </div>
          </div>

          {/* Vertical Line - Hidden on Mobile */}
          <div className="hidden w-px mx-4 bg-nusuk-primary/20 md:block"></div>

          {/* Right side - Description */}
          <div className="w-full md:w-2/3">
            <p className="text-base leading-relaxed text-center text-nusuk-dark/70 md:text-lg md:text-left">
              Sistem URUZ Khairat dibangunkan memudahkan pihak pentadbiran masjid bagi menguruskan hal 
              ehwal keahlian dan pembayaran ahli qariah secara digital dengan pantas dan mudah.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Free Card */}
          <div className="p-6 transition-all duration-300 bg-white shadow-sm rounded-xl hover:shadow-md group">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <div className="flex items-center justify-center transition-colors duration-300 rounded-full bg-nusuk-primary/10 w-14 h-14 group-hover:bg-nusuk-primary">
                  <span className="text-lg font-bold transition-colors duration-300 text-nusuk-primary group-hover:text-white">FREE</span>
                </div>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-nusuk-dark">Percuma</h3>
              <p className="text-sm text-nusuk-dark/70">
                Tiada tanggungan kos pemasangan dan kos server, tidak perlu download.
              </p>
            </div>
          </div>

          {/* Statistics Card */}
          <div className="p-6 transition-all duration-300 bg-white shadow-sm rounded-xl hover:shadow-md group">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <div className="flex items-center justify-center transition-colors duration-300 rounded-full bg-nusuk-primary/10 w-14 h-14 group-hover:bg-nusuk-primary">
                  <BarChart2 className="transition-colors duration-300 text-nusuk-primary w-7 h-7 group-hover:text-white" />
                </div>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-nusuk-dark">Statistik Lengkap</h3>
              <p className="text-sm text-nusuk-dark/70">
                Pentadbir dan ahli boleh memantau prestasi yuran pembayaran khairat.
              </p>
            </div>
          </div>

          {/* Notifications Card */}
          <div className="p-6 transition-all duration-300 bg-white shadow-sm rounded-xl hover:shadow-md group">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <div className="flex items-center justify-center transition-colors duration-300 rounded-full bg-nusuk-primary/10 w-14 h-14 group-hover:bg-nusuk-primary">
                  <Bell className="transition-colors duration-300 text-nusuk-primary w-7 h-7 group-hover:text-white" />
                </div>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-nusuk-dark">Janaan Notifikasi</h3>
              <p className="text-sm text-nusuk-dark/70">
                Notifikasi secara digital sama ada email ataupun Whatsapp.
              </p>
            </div>
          </div>

          {/* Security Card */}
          <div className="p-6 transition-all duration-300 bg-white shadow-sm rounded-xl hover:shadow-md group">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <div className="flex items-center justify-center transition-colors duration-300 rounded-full bg-nusuk-primary/10 w-14 h-14 group-hover:bg-nusuk-primary">
                  <Shield className="transition-colors duration-300 text-nusuk-primary w-7 h-7 group-hover:text-white" />
                </div>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-nusuk-dark">Kemaskini Keselamatan</h3>
              <p className="text-sm text-nusuk-dark/70">
                Data anda tanggungjawab kami. Kami akan sentiasa mengemaskini sistem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState('admin');

  const featureData = {
    admin: {
      description: 'Sistem URUZ Khairat membantu pentadbir dalam pengurusan ahli dan kewangan yang mudah seperti',
      features: [
        // Left Column
        [
          'Pendaftaran ahli dan tanggungan',
          'Graf pendaftaran ahli',
          'Pemantauan dan kemaskini bayaran',
          'Penjanaan notis peringatan'
        ],
        // Right Column
        [
          'Penjanaan yuran',
          'Muat turun laporan (excel)'
        ]
      ]
    },
    member: {
      description: 'Sistem URUZ Khairat menjimatkan masa ahli kariah dalam urusan khairat',
      features: [
        // Left Column
        [
          'Pendaftaran ahli secara online',
          'Capaian pantas status yuran',
          'Pengemaskinian butiran ahli dan tanggungan',
          'Muat naik dokumen (IC, sijil kematian, dll)'
        ],
        // Right Column
        [
          'Pilihan bayaran yuran secara manual, pindahan bank & FPX',
          'Resit digital'
        ]
      ]
    }
  };

  return (
    <div className="py-16 bg-white md:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Features Toggle Section */}
        <div className="p-6 bg-nusuk-light rounded-xl md:p-8">
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Toggle Buttons */}
            <div className="flex gap-4 lg:flex-col lg:w-64">
              <button
                onClick={() => setActiveTab('admin')}
                className={`flex-1 lg:flex-none p-4 text-left rounded-lg transition-all duration-200 
                  ${activeTab === 'admin'
                    ? 'bg-nusuk-dark text-white shadow-lg'
                    : 'bg-white text-nusuk-dark/70 hover:bg-nusuk-light'
                  }`}
              >
                <span className="font-semibold">Pentadbir URUZ Khairat</span>
              </button>
              
              <button
                onClick={() => setActiveTab('member')}
                className={`flex-1 lg:flex-none p-4 text-left rounded-lg transition-all duration-200
                  ${activeTab === 'member'
                    ? 'bg-nusuk-dark text-white shadow-lg'
                    : 'bg-white text-nusuk-dark/70 hover:bg-nusuk-light'
                  }`}
              >
                <span className="font-semibold">Ahli URUZ Khairat</span>
              </button>
            </div>

            {/* Features Content */}
            <div className="flex-grow">
              <div className="mb-8">
                <p className="text-nusuk-dark/70">
                  {featureData[activeTab].description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-x-16 gap-y-6">
                {featureData[activeTab].features.map((column, columnIndex) => (
                  <div key={columnIndex} className="space-y-6">
                    {column.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-1">
                          <Check className="w-5 h-5 text-nusuk-primary" />
                        </div>
                        <span className="text-nusuk-dark/70">{feature}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Stats data
  const stats = [
    {
      icon: <Home className="w-8 h-8 text-nusuk-primary md:w-12 md:h-12" />,
      number: "7",
      label: "Masjid"
    },
    {
      icon: <Building className="w-8 h-8 text-nusuk-primary md:w-12 md:h-12" />,
      number: "13",
      label: "Surau"
    },
    {
      icon: <Users className="w-8 h-8 text-nusuk-primary md:w-12 md:h-12" />,
      number: "3415+",
      label: "Ahli Kariah"
    },
    {
      icon: <CreditCard className="w-8 h-8 text-nusuk-primary md:w-12 md:h-12" />,
      number: "4745+",
      label: "Bayaran Atas Talian"
    }
  ];

  // Testimonials data - maintaining same data
  const testimonials = [
    {
      image: masjidseripermaiImage,
      name: "Masjid Tandop",
      role: "AJK Masjid",
      text: "Semoga terus maju jaya, URUZ Khairat. Sangat mudah digunakan, senang kerja kami lepas ini untuk uruskan ahli khairat."
    },
    {
      image: masjidamanImage,
      name: "Masjid Aman",
      role: "AJK Masjid",
      text: "Senang berurusan, support sentiasa membantu ketika memerlukan. Sistem canggih dan mudah digunakan. Terbaik URUZ Khairat."
    },
    {
      image: masjidseripermaiImage,
      name: "Masjid Permai",
      role: "AJK Masjid",
      text: "Alhamdulillah, sangat membantu pihak pengurusan dan AJK khairat dalam mengendalikan rekod keahlian dan transaksi ahli."
    }
  ];

  // Maintaining same auto scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="pb-16 md:pb-24 bg-nusuk-light">
      {/* Stats Section */}
      <div className="py-12 bg-white md:py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center p-4 text-center transition-colors rounded-lg hover:bg-nusuk-light"
              >
                <div className="mb-4">
                  {stat.icon}
                </div>
                <div className="mb-2 text-2xl font-bold text-nusuk-dark md:text-4xl">
                  {stat.number}
                </div>
                <div className="text-sm text-nusuk-dark/70 md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-nusuk-light">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-12 text-center md:mb-16">
            <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold rounded-full bg-nusuk-primary/10 text-nusuk-primary">
              TESTIMONI
            </span>
            <h2 className="text-3xl font-bold text-nusuk-dark md:text-4xl">
              Apa Kata Mereka
            </h2>
          </div>

          {/* Testimonials Slider */}
          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden">
              <div className="flex gap-6">
                {/* First Testimonial */}
                <div className="flex-shrink-0 w-full md:w-1/2">
                  <div className="h-full p-8 transition-shadow bg-white shadow-sm rounded-xl hover:shadow-md">
                    <div className="flex items-start space-x-4">
                      <img
                        src={testimonials[currentTestimonial].image}
                        alt={testimonials[currentTestimonial].name}
                        className="object-cover w-16 h-16 rounded-full md:w-20 md:h-20"
                      />
                      <div className="flex-1">
                        {/* Rating Stars */}
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-5 h-5 fill-current text-nusuk-primary"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        
                        {/* Testimonial Text */}
                        <p className="mb-4 text-nusuk-dark/70">
                          {testimonials[currentTestimonial].text}
                        </p>
                        
                        {/* Author Info */}
                        <div>
                          <h4 className="font-semibold text-nusuk-dark">
                            {testimonials[currentTestimonial].name}
                          </h4>
                          <p className="text-sm text-nusuk-dark/70">
                            {testimonials[currentTestimonial].role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Second Testimonial - Hidden on mobile */}
                <div className="flex-shrink-0 hidden w-1/2 md:block">
                  <div className="h-full p-8 transition-shadow bg-white shadow-sm rounded-xl hover:shadow-md">
                    <div className="flex items-start space-x-4">
                      <img
                        src={testimonials[(currentTestimonial + 1) % testimonials.length].image}
                        alt={testimonials[(currentTestimonial + 1) % testimonials.length].name}
                        className="object-cover w-20 h-20 rounded-full"
                      />
                      <div className="flex-1">
                        {/* Rating Stars */}
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-5 h-5 fill-current text-nusuk-primary"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        
                        {/* Testimonial Text */}
                        <p className="mb-4 text-nusuk-dark/70">
                          {testimonials[(currentTestimonial + 1) % testimonials.length].text}
                        </p>
                        
                        {/* Author Info */}
                        <div>
                          <h4 className="font-semibold text-nusuk-dark">
                            {testimonials[(currentTestimonial + 1) % testimonials.length].name}
                          </h4>
                          <p className="text-sm text-nusuk-dark/70">
                            {testimonials[(currentTestimonial + 1) % testimonials.length].role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="absolute left-0 right-0 -bottom-8">
              <div className="flex justify-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentTestimonial === index 
                        ? 'w-8 bg-nusuk-primary' 
                        : 'bg-nusuk-primary/30 hover:bg-nusuk-primary/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main KhairatPage Component Export
export const KhairatPage = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <WhyChooseSection />
      <FeaturesSection />
      <TestimonialsSection />
    </div>
  );
};