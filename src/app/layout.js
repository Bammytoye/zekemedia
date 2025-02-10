import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import SearchBox from "@/components/SearchBox";
import Provider from "./Provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zeke Media | 👨🏻‍💻 Code with Zeke",
  description: "Interesting Movies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Header />
          <Navbar />
          <SearchBox />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
