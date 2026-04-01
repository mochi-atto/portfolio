import { FiGithub, FiLinkedin } from 'react-icons/fi';
import PageHeader from '../components/PageHeader';
import './Contact.css';

// ---- UPDATE THESE WITH YOUR URLS ----
const GITHUB_URL = 'https://github.com/your-username';
const LINKEDIN_URL = 'https://linkedin.com/in/your-username';

export default function Contact() {
  return (
    <div className="container contact">
      <PageHeader title="Contact" />

      <p className="contact__blurb">
        The best way to reach me is via email at{' '}
        <a href="mailto:josiemchang@gmail.com">josiemchang@gmail.com</a>. Feel free to reach out about
        collaboration, opportunities, or just to say hello!
      </p>

      <div className="contact__links">
        <a
          href={"https://github.com/mochi-atto"}
          target="_blank"
          rel="noopener noreferrer"
          className="contact__btn contact__btn--github"
        >
          <FiGithub />
          GitHub
        </a>
        <a
          href={"https://www.linkedin.com/in/josie-chang/"}
          target="_blank"
          rel="noopener noreferrer"
          className="contact__btn contact__btn--linkedin"
        >
          <FiLinkedin />
          LinkedIn
        </a>
      </div>
    </div>
  );
}