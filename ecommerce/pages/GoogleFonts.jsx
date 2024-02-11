// Assuming you want to use the 'Inter' font
import Script from 'next/script';

const GoogleFonts = () => (
  <Script
    strategy="beforeInteractive"
    src="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
  />
);

export default GoogleFonts;
