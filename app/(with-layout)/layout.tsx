import Navbar from "@/components/Navbar/Navbar";
import GlowEffect from "@/components/GlowEffect";
import FooterContainer from "@/components/Footer/Footer";
import { FiAlertTriangle } from "react-icons/fi";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="bg-yellow-900/40 border-b border-yellow-800 px-6 py-3 flex items-center gap-3 text-yellow-300 text-sm">
        <FiAlertTriangle className="w-4 h-4 flex-shrink-0 text-yellow-400" />
        <p className=" font-sans">
         I am currently refactoring legacy codebases. Some projects may
          experience temporary downtime. Thank you for your patience and
          understanding.
        </p>
      </div>

      <Navbar />
      <GlowEffect />
      <div className="w-full h-full flex justify-center flex-col items-center px-28 md:pt-28 pt-16 md:mb-0 mb-16">
        {children}
      </div>
      <FooterContainer />
    </div>
  );
}
