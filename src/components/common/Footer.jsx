export default function Footer() {
  return (
    <footer className="footer footer-center p-6 bg-base-200 text-base-content">
      <aside>
        <p className="font-semibold text-primary text-lg">AssetVerse</p>
        <p>Corporate Asset Management System</p>
        <p className="text-sm">
          © {new Date().getFullYear()} AssetVerse. All rights reserved.
        </p>
      </aside>
    </footer>
  );
}
