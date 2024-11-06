import { ChevronRight } from "lucide-react";
import { AnimatedText } from "../components/sections/AnimatedText";
import { Footer } from "../components/layout/Footer";
import PropTypes from 'prop-types';
import clockImage from "../assets/images/clock.png";
import trackImage from "../assets/images/track.png";
import dashboardImage from "../assets/images/dashboard.png";
import folderImage from "../assets/images/folder.png";

export const HomePage = ({ scrollToProducts, navigateToPage }) => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative pt-32 pb-16 text-white bg-nusuk-dark">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-8 text-4xl font-bold leading-tight md:text-6xl">
            Tukar Kerja Anda
              <br />
              Kepada Sistem
            </h1>
            <p className="max-w-2xl mx-auto mb-8 text-lg leading-relaxed text-nusuk-brown-light md:text-xl">
            URUZ semua kerja anda dengan
              <br />
              mudah dan sistematik
            </p>
            <div className="flex justify-center">
              <button
                onClick={scrollToProducts}
                className="px-6 py-3 font-medium transition-colors duration-200 rounded-md text-nusuk-dark bg-nusuk-primary hover:bg-nusuk-accent"
              >
                Lihat Produk URUZ
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <AnimatedText />

      {/* Features Section */}
      <div className="py-16 bg-nusuk-light">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Left Feature */}
            <div className="p-8 text-white rounded-lg bg-nusuk-dark">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-sm font-medium rounded-full text-nusuk-dark bg-[#FFD700]">
                  Berbaloi
                </span>
              </div>
              <h3 className="mb-3 text-xl font-bold">Jimat Masa, Produktiviti Meningkat</h3>
              <p className="mb-6 text-nusuk-brown-light">
              Automasi kerja rutin – lebih masa untuk perkara penting!
              </p>
              <div className="flex justify-center h-48 md:h-64">
                <img
                  src={clockImage}
                  alt="Save time"
                  className="object-cover w-full rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Right Feature */}
            <div className="p-8 bg-white rounded-lg shadow-md">
              <h3 className="mb-3 text-xl font-bold text-nusuk-dark">
              Segalanya dalam Satu Platform
              </h3>
              <p className="mb-6 text-nusuk-dark/70">
              Semua kemudahan yang diperlukan, tersedia di satu tempat – mudah, cepat, dan cekap!
              </p>
              <div className="flex justify-center h-48 md:h-64">
                <img
                  src={folderImage}
                  alt="Keeps in Place"
                  className="object-cover w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Bottom Features */}
          <div className="grid gap-8 mt-8 md:grid-cols-2">
            <div className="p-8 bg-white rounded-lg shadow-md">
              <h3 className="mb-3 text-xl font-bold text-nusuk-dark">
               Membuat Keputusan Dengan Lebih Baik
              </h3>
              <p className="mb-6 text-nusuk-dark/70">
              Data yang jelas dan teratur – lebih mudah memahami situasi dan membuat keputusan lebih baik!
              </p>
              <div className="flex justify-center h-48 md:h-64">
                <img
                  src={dashboardImage}
                  alt="Dashboard"
                  className="object-cover w-full rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="p-8 bg-white rounded-lg shadow-md">
              <h3 className="mb-3 text-xl font-bold text-nusuk-dark">
              Kerja Lebih Sistematik & Teratur
              </h3>
              <p className="mb-6 text-nusuk-dark/70">
              Pendekatan kerja yang sistematik dan teratur memastikan setiap langkah diambil untuk hasil yang memuaskan!
              </p>
              <div className="flex justify-center h-48 md:h-64">
                <img
                  src={trackImage}
                  alt="Track"
                  className="object-cover w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div id="products-section" className="py-16 bg-nusuk-light/50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-center text-nusuk-dark md:text-4xl">
            Produk URUZ
          </h2>
          <p className="mb-12 text-center text-nusuk-dark/70">
            Kami hasilkan sistem pengurusan yang memenuhi keperluan anda pada setiap aspek
          </p>

          <div className="grid max-w-5xl gap-8 mx-auto md:grid-cols-2">
            {[
              {
                title: "URUZ Acara (Akan Datang)",
                description:
                  "Pengurusan Acara/Program Yang Cekap, Lengkap Dengan Pendaftaran, QR Code, Bayaran & Banyak Lagi",
                tag: "Pengurusan Acara",
                color: "bg-nusuk-primary",
                action: () => {},
                isComingSoon: true,
              },
              {
                title: "URUZ Khairat",
                description:
                  "Sistem Pengurusan Khairat Yang Lengkap: Pendaftaran, Bayaran, Tuntutan, Laporan & Banyak Lagi",
                tag: "Pengurusan Khairat",
                color: "bg-nusuk-primary",
                action: () => navigateToPage("khairat"),
                isComingSoon: false,
              },
            ].map((product, index) => (
              <div
                key={index}
                className="p-6 transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg"
              >
                <span
                  className={`inline-block px-3 py-1 rounded-md text-white text-sm mb-4 ${product.color}`}
                >
                  {product.tag}
                </span>
                <h3 className="mb-3 text-xl font-bold text-nusuk-dark">{product.title}</h3>
                <p className="mb-4 text-nusuk-dark/70">{product.description}</p>
                {!product.isComingSoon && (
                  <button
                    onClick={product.action}
                    className="flex items-center font-medium text-nusuk-primary hover:text-nusuk-brown-dark group"
                  >
                    Lihat{" "}
                    <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Download Section */}
      <div className="py-16 text-white bg-nusuk-dark">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Automasi Kerja Anda<br /> dengan URUZ
            </h2>
            <p className="mb-8 text-nusuk-brown-light">
              URUZ Tukar Kerja Rutin Kepada Perlaksanaan Kerja Yang Lebih Sistematik
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

HomePage.propTypes = {
  scrollToProducts: PropTypes.func.isRequired,
  navigateToPage: PropTypes.func.isRequired
};