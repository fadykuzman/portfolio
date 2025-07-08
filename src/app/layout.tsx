import "../../globals.css";
import Script from "next/script";

export const metadata = {
	title: "Fady Kuzman",
	description: "Portfolio of Fady Kuzman",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
			</head>
			<body>{children}
				<Script
					id="cookieyes"
					src="https://cdn-cookieyes.com/client_data/4cb95812dbde9366d2be1527/script.js"
					strategy="afterInteractive"
				/>
			</body>
		</html>
	);
}
