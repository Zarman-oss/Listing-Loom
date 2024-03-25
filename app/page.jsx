import Link from 'next/link.js';
export default function page() {
  return (
    <div>
      <h1 className="text-2xl ">Welcome</h1>
      <Link href="/properties">Show All Listings</Link>
    </div>
  );
}
