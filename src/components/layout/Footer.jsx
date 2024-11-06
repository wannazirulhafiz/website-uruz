export const Footer = ({ navigateToPage }) => {
  return (
    <footer className="py-8 text-white bg-black border-t border-nusuk-primary/20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Center the grid container */}
        <div className="flex justify-center w-full">
          {/* Grid with wider gaps and justified space-between */}
          <div className="flex justify-between w-full max-w-4xl">
            <div>
              <h3 className="mb-4 font-medium text-nusuk-primary">Produk</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => navigateToPage("home")} 
                    className="text-gray-400 transition-colors hover:text-nusuk-primary"
                  >
                    URUZ Acara
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigateToPage("khairat")} 
                    className="text-gray-400 transition-colors hover:text-nusuk-primary"
                  >
                    URUZ Khairat
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-medium text-nusuk-primary">Harga</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => navigateToPage("pricing")} 
                    className="text-gray-400 transition-colors hover:text-nusuk-primary"
                  >
                    Harga
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 font-medium text-nusuk-primary">Syarikat</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => navigateToPage("company")} 
                    className="text-gray-400 transition-colors hover:text-nusuk-primary"
                  >
                    Tentang Kami
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-8 text-center text-gray-400 border-t border-nusuk-primary/20">
          <p>Copyright © 2024 URUZ<br />Managed by AISB</p>
        </div>
      </div>
    </footer>
  );
};