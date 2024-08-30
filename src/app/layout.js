import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import SearchBox from "@/components/SearchBox";
import Provider from "./Provider";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zeke Media",
  description: "Different Movies - 🧑‍💻Code with Zeke",
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
        </Provider>
      </body>
    </html>
  );
}
