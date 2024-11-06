import { Check, ChevronRight } from "lucide-react";
import ContactModal from '../components/ContactModal';

export const CompanyPage = () => {
  return (
    <div className="pt-32 pb-16 bg-nusuk-light">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-4xl font-bold text-nusuk-dark md:text-5xl">
            ANALITIKA
          </h1>
          <p className="mb-8 text-xl text-nusuk-dark/70">
          Memperkasa organisasi melalui solusi digital inovatif
          </p>
        </div>

        {/* Company Overview */}
        <div className="grid gap-12 mb-16 md:grid-cols-2">
          <div className="p-8 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-nusuk-primary">Siapa Kami</h2>
            <p className="mb-4 text-nusuk-dark/70">
            Analitika adalah sebuah syarikat teknologi dalam pembangunan solusi inovatif untuk perniagaan dan organisasi. Ditubuhkan dengan visi untuk mempermudah proses yang kompleks, kami menggabungkan kepakaran teknikal dengan pengetahuan industri bagi mencipta produk digital yang memberi impak.
            </p>
            <p className="text-nusuk-dark/70">
            Produk utama kami, URUZ melambangkan komitmen kami dalam menyediakan sistem yang mesra pengguna dan cekap untuk mentransformasikan operasi organisasi.
            </p>
          </div>

          <div className="p-8 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-nusuk-primary">Misi Kami</h2>
            <p className="mb-4 text-nusuk-dark/70">
            Memperkasa organisasi dengan solusi digital inovatif yang mempermudah operasi, meningkatkan kecekapan dan memacu pertumbuhan.
            </p>
            <div className="space-y-3">
              {[
                "Membangun solusi yang menyelesaikan masalah sebenar",
                "Sentiasa berinovasi untuk memenuhi keperluan yang pelbagai",
                "Memberikan perkhidmatan yang terbaik kepada pelanggan kami"
              ].map((text, index) => (
                <div key={index} className="flex items-start p-2 transition-all duration-200 rounded-md group hover:bg-nusuk-light/50">
                  <Check className="flex-shrink-0 w-5 h-5 mt-1 mr-3 text-nusuk-primary" />
                  <span className="transition-colors duration-200 text-nusuk-dark/70 group-hover:text-nusuk-dark">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="p-8 text-center bg-white rounded-lg shadow-md">
          <h2 className="mb-4 text-2xl font-bold text-nusuk-primary">
            Hubungi Kami
          </h2>
          <p className="mb-6 text-nusuk-dark/70">
          Berminat untuk mengetahui lebih lanjut mengenai solusi kami?
          </p>
          <ContactModal>
            <button className="inline-flex items-center px-6 py-3 font-medium text-white transition-all duration-200 rounded-md bg-nusuk-dark hover:bg-nusuk-primary hover:text-nusuk-dark group">
            Hubungi Kami
              <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </button>
          </ContactModal>
        </div>
      </div>
    </div>
  );
};