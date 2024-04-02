import { Inter } from 'next/font/google';
import React from 'react';
import getCurrentUser from './actions/getCurrentUser';
import Footer from './components/footer/Footer';
import LoginModal from './components/modals/LoginModal';
import RegisterModal from './components/modals/RegisterModal';
import Navbar from './components/navbar/Navbar';
import './globals.css';
import NextProvider from './providers/NextProvider';
import ToasterProvider from './providers/ToasterProvider';

const inter = Inter({ subsets: ['latin'] });

import { cn } from '@/lib/utils';
import Layout from './components/Layout';

export const metadata = {
  title: 'incentive web',
  description: 'this is a web app for incentive',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={cn(inter.className)}>
        <NextProvider>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
          <Layout>
          <div className="pt-24 xl:pt-16 ">{children}</div>
          </Layout>
          <Footer />
        </NextProvider>
      </body>
    </html>
  );
}
