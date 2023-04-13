import "./App.css";
import DesktopNav from "./component/DesktopNav";
import Hero from "./component/Hero";
import Benefits from "./component/Benefits";
import RecentBlogPosts from "./component/RecentBlogPosts";
import MobileMenu from "./component/MobileMenu";

export default function App() {
  return (
    <div className="container">
      <div className="overlay"></div>
      {/* nav */}
      <nav>
        <DesktopNav />
        <MobileMenu />
      </nav>
      {/* Hero */}
      <section className="wrapper hero_section">
        <Hero />
      </section>
      {/* benefits */}
      <section className="wrapper benefits_section">
        <Benefits />
      </section>
      {/* latest articles */}
      <section className="wrapper RecentArticles">
        <RecentBlogPosts />
      </section>
    </div>
  );
}
