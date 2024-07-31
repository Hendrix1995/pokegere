import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PokéGere",
  description: "PokéRogue Tool",
};

export default function PokemonsLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        {children}
        {modal}
      </body>
    </html>
  );
}
