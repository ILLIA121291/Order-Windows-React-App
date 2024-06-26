import './HomePage.scss';

import FirstSection from '../6.1.2 FirstSection/FirstSection';
import ProductSection from '../6.1.3 ProductSection/ProductSection';
import FinishingSection from '../6.1.4 FinishingSection/FinishingSection';
import GallerySection from '../6.1.5 GallerySection/GallerySection';
import GuaranteeSection from '../6.1.6 GuaranteeSection/GuaranteeSection';
import PaymentSection from '../6.1.7 PaymentSection/PaymentSection';
import PromotionSection from '../6.1.8 PromotionSection/PromotionSection';
import LocationSection from '../6.1.9 LocationSection/LocationSection';

const HomePage = props => {
  return (
    <div>
      <FirstSection langugeApp={props.langugeApp} currencyApp={props.currencyApp} />
      <ProductSection
        setModalWindowState={props.setModalWindowState}
        langugeApp={props.langugeApp}
        currencyApp={props.currencyApp}
      />
      <FinishingSection
        langugeApp={props.langugeApp}
        currencyApp={props.currencyApp}
        setModalWindowState={props.setModalWindowState}
      />
      <GallerySection setModalWindowState={props.setModalWindowState} langugeApp={props.langugeApp} />
      <GuaranteeSection langugeApp={props.langugeApp} />
      <PaymentSection langugeApp={props.langugeApp} />
      <PromotionSection langugeApp={props.langugeApp} />
      <LocationSection langugeApp={props.langugeApp} />
    </div>
  );
};

export default HomePage;
