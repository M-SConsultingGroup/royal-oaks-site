import React from 'react';
import Header from '../components/Header';

const AboutPage: React.FC = () => {
	return (
		<div>
			<Header />
			<main className="container mx-auto flex flex-wrap py-12 mt-16">
				{/* The mt-16 here is for adjusting space after fixed header */}
				{/* Contact Information */}
				<div className="w-full md:w-1/2 px-4 mb-8">
					<div className="bg-gray-50 p-8 border border-gray-200 rounded-xl shadow-md">
						<h2 className="text-3xl font-semibold text-gray-800 mb-4">Contact Information</h2>
						<p className="mb-2 text-gray-700">📧 <strong className="font-medium">Email:</strong> royaloaksev@gmail.com</p>
						<p className="mb-2 text-gray-700">📍 <strong className="font-medium">Address:</strong> Dallas, Texas</p>
						<p className="text-gray-700">⏰ <strong className="font-medium">Hours:</strong> Mon-Fri, 9am-5pm CST</p>
					</div>
				</div>

				{/* Google Map */}
				<div className="w-full md:w-1/2 px-4 mb-8">
					<div className="bg-gray-50 p-8 border border-gray-200 rounded-xl shadow-md">
						<h2 className="text-3xl font-semibold text-gray-800 mb-4">Location</h2>
						<div className="w-full h-72">
							<iframe
								title="Google Map"
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.764593901717!2d-96.7970!3d32.7767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e99119998cdf9%3A0xf4fbe5b4fcf64119!2sDallas%2C%20TX%2C%20USA!5e0!3m2!1sen!2sin!4v1700000000000"
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