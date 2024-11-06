import { Check } from "lucide-react";
import ContactModal from '../components/ContactModal';

export const PricingPage = () => {
  const features = [
    "Pengurusan Ahli",
    "Statistik & Laporan",
    "Janaan Resit & Invois",
    "Fungsi Makluman"
  ];

  return (
    <div className="pt-32 pb-16 bg-nusuk-light">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="mb-6 text-4xl font-bold text-nusuk-dark md:text-5xl">
            URUZ Khairat Masjid
          </h1>
          <p className="mb-12 text-xl text-nusuk-dark/70">
            Mulakan dengan URUZ tanpa kos
          </p>

          <div className="max-w-3xl mx-auto overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
            <div className="px-6 py-8">
              <h2 className="mb-4 text-2xl font-bold text-center text-nusuk-dark">PERCUMA</h2>
              <p className="mb-6 text-5xl font-bold text-center text-nusuk-primary">
                RM 0
                <span className="text-lg font-normal text-nusuk-dark/60">
                  /bulan
                </span>
              </p>

              <div className="flex flex-col items-center space-y-4">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-center w-full max-w-xs p-2 transition-colors duration-200 rounded-md group hover:bg-nusuk-light/50"
                  >
                    <Check className="w-5 h-5 mr-3 text-nusuk-primary" />
                    <span className="transition-colors duration-200 text-nusuk-dark/80 group-hover:text-nusuk-dark">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <ContactModal>
                <button className="w-full px-6 py-3 mt-8 font-medium text-white transition-all duration-200 rounded-md bg-nusuk-dark hover:bg-nusuk-primary hover:text-nusuk-dark">
                Mulakan Sekarang
                </button>
              </ContactModal>
            </div>
          </div>

          <div className="mt-12 text-nusuk-dark/70">
            <p>
            Perlu sistem pengurusan khusus mengikut keperluan anda?{" "}
              <ContactModal>
                <span className="font-medium transition-colors cursor-pointer text-nusuk-primary hover:text-nusuk-brown-dark">
                Hubungi kami
                </span>
              </ContactModal>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};