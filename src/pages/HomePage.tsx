
import Features from "../components/Features";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import VideoSection from "../components/VideoSection";

const HomePage: React.FC = () => (
	<div>
		<Header />
		<HeroSection />
		<VideoSection />
		<Features />
		<Gallery />
	</div>
);

export default HomePage;