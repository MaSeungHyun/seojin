import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { NavigationMenu } from "@radix-ui/react-navigation-menu";
import { Layout } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Layout />
      <Footer />
    </main>
  );
}
