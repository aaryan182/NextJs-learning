import { Metadata } from "next";

type Props = {
    params: {
        productId: string
    }
}

export const generateMetaData = async ({ params }: Props): Promise<Metadata> => {
    const title = await new Promise(resolve => {
        setTimeout(() => {
            resolve(`Product ${params.productId}`)
        }, 1000)
    })
    return {
        title: `Product ${title}`,
    };
}

export default function Product({ params, }: Props) {
    return <h1>Welcome Product {params.productId}!</h1>;
}