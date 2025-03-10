import { useState } from "react";

const PackageDeals = ({ onSelectPackage }: { onSelectPackage: (title: string) => void }) => {
	const packages = [
		{
			title: "The Heartwood Package",
			description: "This stunning chapel event space can comfortably host up to 200 guests, featuring high, vaulted ceilings with exposed beams that add rustic charm and character. The space is designed to create a warm, intimate atmosphere, with soft lighting that enhances the natural beauty of the wood details. The central altar area provides a beautiful focal point for ceremonies or celebrations. The chapel is equipped with modern sound and lighting systems to ensure your event runs smoothly. Its versatile layout allows for a variety of setups, making it perfect for both elegant and personalized occasions.",
			image: "heartwood.jpg",
		},
		{
			title: "The Sterling Package",
			description: "This spacious banquet hall comfortably accommodates up to 300 guests, offering a grand and elegant setting for large events. The room features high ceilings with modern chandeliers that provide a warm and inviting glow, creating a sophisticated atmosphere. Versatile and open, the hall is designed to be easily customized, allowing for a variety of seating arrangements and décor styles. Large windows flood the space with natural light, while elegant drapery adds a touch of refinement. Equipped with state-of-the-art audio-visual systems, it's perfect for weddings, corporate events, and celebrations of all kinds.",
			image: "sterling.jpg",
		},
		{
			title: "The Regalia Package",
			description: "This expansive banquet hall, designed for up to 400 guests, features a warm yet modern aesthetic with high ceilings and bold architectural details. The room is bathed in soft, ambient lighting, creating an elegant yet welcoming atmosphere for any event. Large, open spaces offer flexibility for a variety of seating arrangements, making it ideal for everything from grand weddings to corporate galas. The hall's sleek, contemporary design is complemented by stylish columns and intricate wall features that add a touch of sophistication. With state-of-the-art sound and lighting systems, the venue provides everything needed for an unforgettable experience.",
			image: "regalia.jpg",
		},
		{
			title: "The Windsor Package",
			description: "This elegant wedding package offers a memorable experience with both a charming chapel and a spacious banquet hall, accommodating up to 200 guests. The ceremony takes place in the beautifully designed chapel, where the soft glow of ambient lighting and exposed beams create a warm, intimate atmosphere for your vows. After the ceremony, guests move to the banquet hall, where the modern décor and high ceilings provide a stunning backdrop for an unforgettable reception. The hall is fully equipped with advanced sound and lighting systems, ensuring every moment is enhanced. This seamless package offers everything you need for a flawless and enchanting celebration.",
			image: "windsor.jpg",
		},
		{
			title: "The Regency Package",
			description: "This exceptional wedding package combines the beauty of a grand chapel and an expansive banquet hall, designed to host up to 300 guests. The ceremony takes place in the chapel, where high ceilings and intricate architectural details create a serene and intimate setting for exchanging vows. Afterward, guests are welcomed into the spacious banquet hall, offering a sophisticated atmosphere with ample room for dining, dancing, and celebrating. The elegant hall is perfectly suited for large gatherings, with plenty of space to customize seating and décor to your taste. This comprehensive package provides a seamless experience, ensuring every moment of your wedding day is unforgettable.",
			image: "regency.jpg",
		}
	];

	const [selectedIndex, setSelectedIndex] = useState(0);

	const handleSelect = (index: number) => {
		setSelectedIndex(index);
	};

	return (
		<section className="bg-white py-12 relative mt-16 lg:mt-20" data-aos="fade-up">
			{/* Decorative Branch Elements */}
			<img
				src="modified_branch.png"
				alt="Decorative Branch"
				className="absolute top-10 left-10 w-32 h-auto rotate-[-28deg] opacity-30 -z-10 hidden lg:block shadow-none"
				data-aos="fade-right"
			/>
			<img
				src="modified_branch.png"
				alt="Decorative Branch"
				className="absolute bottom-20 right-10 w-24 h-auto rotate-[15deg] opacity-30 -z-10 hidden lg:block shadow-none"
				data-aos="fade-left"
			/>
			<img
				src="modified_branch.png"
				alt="Decorative Branch"
				className="absolute top-20 right-20 w-28 h-auto rotate-[45deg] opacity-30 -z-10 hidden lg:block shadow-none"
				data-aos="fade-right"
			/>
			<img
				src="modified_branch.png"
				alt="Decorative Branch"
				className="absolute bottom-10 left-20 w-20 h-auto rotate-[-10deg] opacity-30 -z-10 hidden lg:block shadow-none"
				data-aos="fade-left"
			/>

			<div className="relative max-w-7xl mx-auto px-6">
				<div className="tabs flex justify-center mb-8 bg-gray-50 p-4 rounded-xl shadow-md">
					{packages.map((pack, index) => (
						<button
							key={index}
							onClick={() => handleSelect(index)}
							className={`py-2 px-4 mx-1 border-b-2 transition-all ${
								index === selectedIndex 
									? 'border-primary text-primary font-semibold' 
									: 'border-transparent text-button hover:text-buttonHover'
							}`}
						>
							{pack.title}
						</button>
					))}
				</div>

				<div className="mt-8">
					<div className="flex flex-col lg:flex-row items-center justify-center gap-8">
						<div className="w-full lg:w-1/2 flex-shrink-0 bg-gray-50 p-8 rounded-xl shadow-md">
							<img
								src={packages[selectedIndex].image}
								alt={packages[selectedIndex].title}
								className="w-full h-64 lg:h-[400px] object-cover rounded-lg shadow-sm"
							/>
						</div>
						<div className="w-full lg:w-1/2 bg-gray-50 rounded-xl shadow-md p-8 lg:p-12">
							<div className="max-w-md mx-auto text-center">
								<h3 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
									{packages[selectedIndex].title}
								</h3>
								<p className="text-gray-600 mb-8 leading-relaxed">
									{packages[selectedIndex].description}
								</p>
								<button
									onClick={() => onSelectPackage(packages[selectedIndex].title)}
									className="px-8 py-3 bg-button text-white rounded-full text-lg font-semibold transition duration-300 hover:bg-buttonShadow"
								>
									Select Package
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PackageDeals;