import React from 'react';
import Header from '../components/Header';

const AboutPage: React.FC = () => {
	return (
		<div>
			<Header />
			<main className="container mx-auto flex flex-wrap py-12 mt-16" data-aos="fade-up">
				{/* Summary */}
				<div className="w-full px-4 mb-8">
					<div className="bg-gray-50 p-8 border border-gray-200 rounded-xl shadow-md">
						<h2 className="text-3xl font-semibold text-primary mb-4">About Royal Oaks Event Venue</h2>
						<p className="text-secondary"> {/* Updated color to secondary */}
							Royal Oaks Event Venue is a premier location spanning 8 acres, perfect for weddings, birthdays, corporate events, and more. With the ability to accommodate up to 400 guests, our versatile spaces are designed to host gatherings of all sizes, offering the ideal setting for any occasion. Whether you're planning an elegant wedding, a memorable birthday celebration, or a professional corporate event, Royal Oaks provides everything you need for a successful event. With modern amenities, ample parking, and flexible indoor and outdoor spaces, we ensure that every event runs smoothly from start to finish. Choose Royal Oaks Event Venue to create an unforgettable experience for you and your guests.
						</p>
					</div>
				</div>
				{/* Contact Information */}
				<div className="w-full md:w-1/2 px-4 mb-8">
					<div className="bg-gray-50 p-8 border border-gray-200 rounded-xl shadow-md">
						<h2 className="text-3xl font-semibold text-gray-800 mb-4">Contact Information</h2>
						<p className="mb-2 text-gray-700">📧 <strong className="font-medium">Email:</strong> royaloaksev@gmail.com</p>
						<p className="mb-2 text-gray-700">📍 <strong className="font-medium">Address:</strong> 601 Old Base Rd, Aurora Texas, 76078 </p>
					</div>
				</div>

				{/* Google Map */}
				<div className="w-full md:w-1/2 px-4 mb-8">
					<div className="bg-gray-50 p-8 border border-gray-200 rounded-xl shadow-md">
						<h2 className="text-3xl font-semibold text-gray-800 mb-4">Location</h2>
						<div className="w-full h-72">
							<iframe
								title="Google Map"
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.915016861496!2d-97.51242099999999!3d33.059622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864dfb123456789a%3A0x123456789abcdef!2s601%20Old%20Base%20Rd%2C%20Aurora%2C%20TX%2076078%2C%20USA!5e0!3m2!1sen!2sin!4v1700000000000"
								width="100%"
								height="100%"
								style={{ border: '0' }}
								allowFullScreen={true}
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							></iframe>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default AboutPage;