import './App.css';
import Nav from './components/Nav';
import {
	CustomerReviews,
	Footer,
	Hero,
	PopularProducts,
	Services,
	SpecialOffer,
	Subscribe,
	SuperQuality,
} from './Sections';

const App = () => {
	return (
		<main className="relative overflow-hidden	bg-gray-100">
			<Nav />
			<section className="xl:padding-1 wide:padding-r padding-b mt-24">
				<Hero />
			</section>
			<section className="padding">
				<PopularProducts />
			</section>
			<section className="padding">
				<SuperQuality />
			</section>
			<section className="padding-x py-10">
				<Services />
			</section>
			<section className="padding">
				<SpecialOffer />
			</section>
			<section className="bg-pale-blue padding">
				<CustomerReviews />
			</section>
			<section className="padding-x sm:py-32 py:16 w-full">
				<Subscribe />
			</section>
			<section className="bg-black padding-x padding-t pb-8">
				<Footer />
			</section>
		</main>
	);
};
export default App;
