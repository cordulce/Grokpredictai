import { useState } from 'react';
import { TopNavigation } from './components/TopNavigation';
import { CategoryNavigation } from './components/CategoryNavigation';
import { SearchPanel } from './components/SearchPanel';
import { SearchResults } from './components/SearchResults';
import { LogoutConfirmation } from './components/LogoutConfirmation';
import { LoginModal, SignupModal } from './components/AuthModals';
import { HomePage } from './components/pages/Home';
import { FeaturesPage } from './components/pages/Features';
import { PricingPage } from './components/pages/Pricing';
import { AboutPage } from './components/pages/About';
import { ContactPage } from './components/pages/Contact';
import { ProfilePage } from './components/pages/Profile';
import { WatchlistPage } from './components/pages/Watchlist';
import { HistoryPage } from './components/pages/History';
import { NotificationsPage } from './components/pages/Notifications';
import { MarketDetail } from './components/pages/MarketDetail';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { MobileMenu } from './components/MobileMenu';
import { OverlayRoot } from './components/layout/OverlayRoot';

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    setShowLogoutConfirm(true);
  };

  const handleLogoutConfirm = () => {
    setIsLoggedIn(false);
    setShowLogoutConfirm(false);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setShowSearchResults(true);
    setCurrentPage('search');
  };

  const renderPage = () => {
    if (showSearchResults && currentPage === 'search') {
      return (
        <SearchResults 
          query={searchQuery} 
          onClose={() => {
            setShowSearchResults(false);
            setCurrentPage('home');
          }}
        />
      );
    }

    switch (currentPage) {
      case 'features':
        return <FeaturesPage />;
      case 'pricing':
        return <PricingPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'profile':
        return <ProfilePage />;
      case 'watchlist':
        return <WatchlistPage />;
      case 'history':
        return <HistoryPage />;
      case 'notifications':
        return <NotificationsPage />;
      case 'market-detail':
        return <MarketDetail onBack={() => setCurrentPage('home')} />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="dark min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Top Navigation */}
      <TopNavigation 
        isLoggedIn={isLoggedIn}
        onSearchToggle={() => setIsSearchOpen(!isSearchOpen)}
        onLogout={handleLogout}
        onLoginClick={() => setShowLoginModal(true)}
        onSignupClick={() => setShowSignupModal(true)}
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />

      {/* Category Navigation - only show on home page */}
      {currentPage === 'home' && <CategoryNavigation />}

      {/* Page Content */}
      <main className="w-full">
        {renderPage()}
      </main>

      {/* FAQ */}
      <FAQ />

      {/* Footer */}
      <Footer />

      {/* Overlay Layer - All modals, dropdowns, notifications */}
      <OverlayRoot>
        {/* Search Panel */}
        <SearchPanel isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} onSearch={handleSearch} />

        {/* Logout Confirmation */}
        <LogoutConfirmation
          isOpen={showLogoutConfirm}
          onClose={() => setShowLogoutConfirm(false)}
          onConfirm={handleLogoutConfirm}
        />

        {/* Login Modal */}
        <LoginModal
          isOpen={showLoginModal}
          onClose={() => setShowLoginModal(false)}
          onSuccess={handleLoginSuccess}
        />

        {/* Signup Modal */}
        <SignupModal
          isOpen={showSignupModal}
          onClose={() => setShowSignupModal(false)}
          onSuccess={handleLoginSuccess}
        />

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          currentPage={currentPage}
          onNavigate={setCurrentPage}
          onSignupClick={() => setShowSignupModal(true)}
        />
      </OverlayRoot>
    </div>
  );
}