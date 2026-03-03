import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BackToHome = () => (
  <Link
    to="/"
    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
  >
    <ArrowLeft size={16} />
    <span>Voltar</span>
  </Link>
);

export default BackToHome;
