import { star } from '../assets/icons';

const PopularProductsCard = ({ imgURL, name, price, rating }) => {
	return (
		<div className="flex flex-1 flex-col w-full max-sm:w-full max-md:items-center">
			<img src={imgURL} alt={name} className="w-[336px] h-auto" />

			<div className="mt-8 flex justify-normal gap-2.5">
				<img src={star} alt="ratting" width={24} height={24} />
				<p className="font-montserrat text-xl leading-normal text-slate-gray dark:text-slate-300">
					{rating}
				</p>
			</div>

			<h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin dark:text-white-400">
				{name}
			</h3>
			<p className="mt-2 text-2xl text-coral-red leading-normal font-semibold font-montserrat dark:text-white-400">
				{price}
			</p>
		</div>
	);
};
export default PopularProductsCard;
