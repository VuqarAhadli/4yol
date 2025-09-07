import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner"; // optional

export const metadata = {
  title: "4YOL",
  description: "4YOL – Motoblog and Road Stories",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />

      <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-4">Latest News</h2>
        <p>No news yet.</p>
      </section>

      <section className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-4">Latest Blog Posts</h2>
        <p>No blog posts yet.</p>
      </section>

      <Footer />
    </>
  );
}
