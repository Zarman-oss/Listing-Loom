import '../assets/styles/globals.css';
export default function MainLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <div className='min-h-screen bg-gray-100'>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
