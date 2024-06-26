import type { Metadata } from "next";
import Error404 from './pages/Erro/page';

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

/* Importação das funções principais que ficarão fixas em todas as páginas */
import Menu from "./Menu/page";
import Rodape from "./Rodape/page"

export default function RootLayout({

  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="pt-BR">
      <body className="layout">
        <Menu/>
          {children}
        <Rodape/>
      </body>
    </html>
  );
}
