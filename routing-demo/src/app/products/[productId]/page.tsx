export default function Product({ params, }: {
    params: { productId: string }
}) {
    return <h1>Welcome Product {params.productId}!</h1>;
}