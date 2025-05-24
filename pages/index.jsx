import Footer from "../components/Footer";
import Banner from "../components/HomeComponents/Banner";
import MyExpertise from "../components/HomeComponents/Expertise/MyExpertise";
import CertificatesSection from "../components/HomeComponents/CertificatesSection/CertificatesSection";

const home = () => {
  return (
    <div className="Home-Page -z-10">
      <Banner />
      <MyExpertise />
      {/* <Recommendations /> */}
      <CertificatesSection />
      {/* <ClientReviews /> */}
      <Footer />
    </div>
  );
};
export default home;
