import { useState } from "react";
import { HomePage } from "./pages/HomePage";
import { CompanyPage } from "./pages/CompanyPage";
import { PricingPage } from "./pages/PricingPage";
import { KhairatPage } from "./pages/KhairatPage";
import { Navigation } from "./components/layout/Navigation";
import { Footer } from "./components/layout/Footer";
import "./styles/index.css";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  const scrollToProducts = () => {
    const productsSection = document.getElementById("products-section");
    if (productsSection) {
      const offset = 80;
      const elementPosition = productsSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navigateToPage = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "pricing":
        return <PricingPage />;
      case "company":
        return <CompanyPage />;
      case "khairat":
        return <KhairatPage navigateToPage={navigateToPage} />;
      default:
        return <HomePage scrollToProducts={scrollToProducts} navigateToPage={navigateToPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        navigateToPage={navigateToPage}
      />
      {renderPage()}
      <Footer navigateToPage={navigateToPage} />
    </div>
  );
};

export default App;