import Footer from './Footer';
import Navbar from './Navbar';

interface LayoutProps extends React.PropsWithChildren {}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
