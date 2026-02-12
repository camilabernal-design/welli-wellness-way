import { Navigate } from 'react-router-dom';
import LoginPage from './LoginPage';

interface ProtectedRouteProps {
  isAuthenticated: boolean;
  onLogin: () => void;
  children: React.ReactNode;
}

export default function ProtectedRoute({ isAuthenticated, onLogin, children }: ProtectedRouteProps) {
  if (!isAuthenticated) {
    return <LoginPage onLogin={onLogin} />;
  }

  return <>{children}</>;
}
