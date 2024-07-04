interface Props {
	params: {
		slug: string[];
	};
	searchParams: {
		sortBy: string;
	};
}
const Products = ({ params, searchParams }: Props) => {
	return (
		<div>
			Products {params.slug} {searchParams.sortBy}
		</div>
	);
};
export default Products;
