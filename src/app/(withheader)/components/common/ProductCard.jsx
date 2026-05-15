import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { addToCart } from '../../api-fetching/cartApi/addToCart';
import { addToWishlist, getWishlistItems } from '../../api-fetching/wishlistApi/wishlistApi';
import { useDispatch } from 'react-redux';
import { setWishlist } from '@/redux/slices/wishlistSlice';

const ProductCard = ({ product, path }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const quantity = 1;
    const categoryId = product.parentCategory?._id || product.parentCategory;
    const productImage = product.productImage || product.galleryImage?.[0];

    const handleAddToWishlist = async () => {
        const response = await addToWishlist(product._id, product.salePrice, productImage, product.productName, categoryId, path);
        if (response.success) {
            const wishlistResponse = await getWishlistItems();
            dispatch(setWishlist(wishlistResponse.data));
            router.push("/wish-list");
            return;
        }

        if (response.message === "Authorization token missing") {
            router.push("/login");
        }
    };

    return (
        <div className="group relative bg-background border border-border rounded-2xl overflow-hidden transition-all duration-700 h-full flex flex-col hover:border-primary/50 hover:shadow-2xl">
            {/* Image Container with Elegant Zoom & Overlay */}
            <div className="relative aspect-[3/4] overflow-hidden bg-accent">
                <Link href={`/product/${product.slug}`} className="block w-full h-full">
                    <img
                        src={`${path}${product.productImage}`}
                        alt={product.productName}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                    />
                </Link>

                {/* Delicate Sale Badge */}
                {/* {product.oldPrice && (
                    <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-[0.2em] rounded-full shadow-lg z-10 transition-transform group-hover:scale-110">
                        Limited
                    </div>
                )} */}

                {/* Quick Actions - Floating on hover */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-20">
                    <button
                        onClick={handleAddToWishlist}
                        className="w-10 h-10 flex items-center justify-center bg-background text-secondary hover:bg-secondary hover:text-background rounded-full transition-all duration-300 shadow-xl"
                        title="Add to wishlist"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                    </button>
                    <button
                        onClick={() => {
                            addToCart(product._id, quantity, product.salePrice, productImage, product.productName, categoryId, path);
                            // console.log(product.color);
                            setTimeout(() => {
                                router.push("/cart");
                            }, 500);
                        }} className="px-6 py-3 bg-secondary text-background text-[10px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-primary transition-all duration-300 shadow-xl whitespace-nowrap flex items-center justify-center">
                        Add to Cart
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center bg-background text-secondary hover:bg-secondary hover:text-background rounded-full transition-all duration-300 shadow-xl">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Content with Refined Typography */}
            <div className="pt-5 pb-5 px-5 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                    <p className="text-[10px] text-primary uppercase tracking-[0.3em] font-bold">
                        {product.category || 'Monsta Selection'}
                    </p>
                </div>
                <h3 className="text-xl font-serif font-medium text-secondary line-clamp-1 mb-4 group-hover:text-primary transition-all duration-700">
                    <Link href={`/product/${product.slug}`} >{product.productName}</Link>
                </h3>

                <div className="mt-auto flex items-center justify-between">
                    <span className="text-xl font-serif font-bold text-secondary">Rs. {product.salePrice}</span>
                    <span className="text-[9px] uppercase tracking-widest text-text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-700">In Stock</span>
                </div>
            </div>

        </div>
    );
};

export default ProductCard;
