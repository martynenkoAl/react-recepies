export default function Footer() {
  return (
    <footer className='page-footer grey lighten-3'>
      <div className='footer-copyright'>
        <div className='container grey-text'>
          © {new Date().getFullYear()} Alina Martynenko
          <a
            className='grey-text right'
            href='https://github.com/martynenkoAl/react-shop'
            target='_blank'
            rel='noreferrer'
          >
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
}
