import Navbar from "@/components/Navbar/Navbar";
import GlowEffect from "@/components/GlowEffect";
import FooterContainer from "@/components/Footer/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <GlowEffect />
      <div className="w-full h-full flex justify-center flex-col items-center px-28 md:pt-28 pt-16 md:mb-0 mb-16">
        {children}
      </div>
      <FooterContainer />
    </div>
  );
}
