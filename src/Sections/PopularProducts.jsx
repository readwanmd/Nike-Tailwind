/* eslint-disable react/jsx-key */
import PopularProductsCard from '../components/PopularProductsCard';
import { products } from '../constants';

const PopularProducts = () => {
	return (
		<section id="products" className="max-container max-sm:mt-12">
			<div className="flex flex-col justify-start gap-5">
				<h2 className="text-4xl font-palanquin font-bold dark:text-white-400">
					Our <span className="text-coral-red">Popular</span> Products
				</h2>
				<p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray dark:text-slate-300">
					Experience top notch quality and style with our sought after
					selactions. Discover a world of comfort, design and value.
				</p>
			</div>

			<div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14 sm:gap-4">
				{products.map((product) => (
					<PopularProductsCard
						kay={product.name}
						imgURL={product.imgURL}
						name={product.name}
						price={product.price}
						rating={product.rating}
					/>
				))}
			</div>
		</section>
	);
};
export default PopularProducts;
