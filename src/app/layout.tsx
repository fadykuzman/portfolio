import "../../globals.css";

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
				<script
					id="cookieyes"
					type="text/javascript"
					src="https://cdn-cookieyes.com/client_data/4cb95812dbde9366d2be1527/script.js"
				></script>
			</head>
			<body>{children}</body>
		</html>
	);
}
