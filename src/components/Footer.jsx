import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {year} Josie Chang. All rights reserved.</p>
      {/* Add icon/image credits below as needed */}
      <p className="footer__credits">
        {/* Example: Icons by Lucide · Photos by Unsplash */}
      </p>
    </footer>
  );
}