import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './PageHeader.css';

export default function PageHeader({ title, subtitle }) {
  const navigate = useNavigate();

  return (
    <div className="page-header">
      <div className="page-header__row">
        <button className="page-header__back" onClick={() => navigate('/')}>
          <FiArrowLeft />
        </button>
        <h1 className="page-header__title">{title}</h1>
      </div>
      {subtitle && <p className="page-header__subtitle">{subtitle}</p>}
    </div>
  );
}