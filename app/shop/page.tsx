import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ShopHero from "@/app/components/shop/ShopHero";
import SidebarFilter from "@/app/components/shop/SidebarFilter";
import ProductGrid from "@/app/components/shop/ProductGrid";

export default function Shop() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "68px", minHeight: "100vh" }}>
        <ShopHero />
        <section style={{ maxWidth: "var(--max-width)", margin: "0 auto", padding: "80px 24px" }}>
          <div className="shop-layout">
            <div className="shop-sidebar">
              <SidebarFilter />
            </div>
            <ProductGrid />
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        .shop-layout {
          display: flex;
          gap: 48px;
          align-items: flex-start;
        }
        .shop-sidebar {
          width: 250px;
          flex-shrink: 0;
        }
        @media (max-width: 900px) {
          .shop-layout {
            flex-direction: column;
          }
          .shop-sidebar {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
