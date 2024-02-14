import Link from "next/link";

export default function Home() {
    return <>
    Welcome Home!
    <Link href="/about">About</Link>
    <Link href="/blog">Blog</Link>
    <Link href="/profile">Profile</Link>
    <Link href="/products">Products</Link>
    </>;
}