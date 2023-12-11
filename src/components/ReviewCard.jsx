import { star } from '../assets/icons';

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
	return (
		<div className="flex justify-center items-center flex-col shadow-2xl p-8 rounded-2xl dark:bg-gray-900">
			<img
				src={imgURL}
				alt="customer"
				className="rounded-full object-cover w-[120px] h-[120px]"
			/>
			<p className="mt-6 max-w-sm text-center info-text">{feedback}</p>

			<div className="mt-3 flex justify-center items-center gap-2.5">
				<img
					src={star}
					alt="ratting"
					width={24}
					height={24}
					className="object-contain m-0"
				/>
				<p className="text-xl font-montserrat text-slate-gray dark:text-slate-300">
					{rating}
				</p>
			</div>

			<h3 className="mt-1 font-palanquin text-3xl text-center font-bold dark:text-white-400">
				{customerName}
			</h3>
		</div>
	);
};
export default ReviewCard;
