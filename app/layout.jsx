import '@/assets/styles/globals.css';

export const metadata = {
  title: 'ListingLoom | Sell Rent made easy ',
  description:
    'All yall gotta do is login and start looking for your rental houses whatever yall looking for.',
  keywords: 'rental, find rentals, cheap rentals, condos,',
};

export default function AppLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
