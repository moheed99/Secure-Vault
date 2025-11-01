import React from 'react';
import { AuthProvider, useAuth } from './hooks/useAuth';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import { Header } from './components/Header';
import { ShieldCheck } from './components/Icons';

const AppContent: React.FC = () => {
  const { user, isLoading } = useAuth();
  const [isRegistering, setIsRegistering] = React.useState(false);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <ShieldCheck className="w-16 h-16 text-accent animate-pulse" />
        <p className="mt-4 text-lg">Initializing Secure Vault...</p>
      </div>
    );
  }

  if (!user) {
    return isRegistering ? (
      <RegisterPage onSwitchToLogin={() => setIsRegistering(false)} />
    ) : (
      <LoginPage onSwitchToRegister={() => setIsRegistering(true)} />
    );
  }

  return (
    <>
      <Header />
      <DashboardPage />
    </>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-primary">
        <AppContent />
      </div>
    </AuthProvider>
  );
};

export default App;
