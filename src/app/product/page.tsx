import HeaderComponent from '../../components/HeaderComponent';
import ProductPage from '../../components/ProductPage';
import FooterComponent from '../../components/FooterComponent';

export default function Product() {
  return (
    <div className="Web-page">
      <HeaderComponent />
      <ProductPage />
      <FooterComponent />
    </div>
  );
}
