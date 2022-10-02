import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="dark:bg-zinc-900 dark">
      <div className="container mx-auto max-w-5xl flex flex-col min-h-screen px-4 dark:text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
