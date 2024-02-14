"use client"
import { useRouter } from "next/navigation";

export default function OrderProduct() {
    const router = useRouter();
    const handleClick = () => {
        alert('Order Placed');
        router.push('/');
        // router.back();
        // router.forward();
        // router.replace('/');
    }
  return (
    <>
    <h1>OrderProduct</h1>
    <button onClick={handleClick}>Place Order </button>
    </>
  )
}
