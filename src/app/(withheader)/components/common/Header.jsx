"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '@/redux/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';
import { removeToken } from '@/redux/slices/loginSlice';
import { useRouter } from 'next/navigation';
import { setCart } from '@/redux/slices/cartSlice';
import { getCartItems } from '../../api-fetching/cartApi/cartApi';
import { setWishlist } from '@/redux/slices/wishlistSlice';
import { getWishlistItems } from '../../api-fetching/wishlistApi/wishlistApi';
import { homeCollectionMenuApi } from '../../api-fetching/home/homeCollectionMenuApi';

const Header = () => {
    const dispatch = useDispatch();
    const { theme, toggleTheme, activeMenuIndex, setActiveMenuIndex } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);
    const router = useRouter();
    const cartItems = useSelector((state) => state.cart.cartItems);
    const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
    const [collectionMenu, setCollectionMenu] = useState([]);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const fetchHeaderItems = async () => {
            const [cartResponse, wishlistResponse, collectionResponse] = await Promise.all([
                getCartItems(),
                getWishlistItems(),
                homeCollectionMenuApi()
            ]);
            dispatch(setCart(cartResponse.data));
            dispatch(setWishlist(wishlistResponse.data));
            setCollectionMenu(collectionResponse?._data || []);
        };
        fetchHeaderItems();
    }, [dispatch]);


    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about-us' },
        { name: 'Product', href: '/product' },
    ];

    const token = useSelector((state) => state.login.token);

    return (
        <header className="w-full font-sans relative">
            {/* Top Bar - Luxe Minimal */}
            <div className={`bg-neutral-900 text-white  py-2.5 border-b border-white/5 ${mounted && token ? 'hidden' : 'block'}`}>
                <div className="container mx-auto px-6 flex justify-between items-center text-[11px] uppercase tracking-[0.2em] font-medium">
                    <div className="hidden md:block">
                        <p>Complimentary Shipping on Luxury Orders over Rs. 50,000</p>
                    </div>
                    <div className="flex gap-6 mx-auto md:mx-0">
                        <Link href="/login" className="hover:text-primary transition-colors">Login</Link>
                        <span className="opacity-30">|</span>
                        <Link href="/register" className="hover:text-primary transition-colors">Register</Link>
                    </div>
                </div>
            </div>

            {/* Main Header - Sticky & Elegant */}
            <div className={`transition-all duration-500 py-6 ${isScrolled ? 'fixed top-0 left-0 right-0 bg-background/90 backdrop-blur-md shadow-sm z-[100] py-4' : 'bg-background border-b border-accent-dark'}`}>
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between">

                        {/* Mobile Menu Trigger */}
                        <div className="lg:hidden">
                            <button
                                onClick={() => setIsMobileMenuOpen(true)}
                                className="text-secondary p-2 -ml-2 hover:text-primary transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" /></svg>
                            </button>
                        </div>

                        {/* Navigation - Left Side (Desktop) */}
                        <nav className="hidden lg:flex items-center gap-8">
                            {navLinks.map((link, idx) => (
                                <Link
                                    key={link.name}
                                    onClick={() => setActiveMenuIndex(idx)}
                                    href={link.href}
                                    className={`text-xs font-bold uppercase tracking-[0.2em] text-secondary hover:text-primary transition-colors py-2 border-b-2 ${pathname === link.href ? 'border-primary' : 'border-transparent'}`}
                                >
                                    {link.name}
                                </Link>
                            ))}


                            <div className="group relative py-2">
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary hover:text-primary transition-colors cursor-pointer flex items-center gap-1">
                                    Collection
                                    <svg className="w-3 h-3 translate-y-[1px]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                </span>
                                <div className="absolute left-0 top-full mt-2 w-[760px] max-h-[70vh] overflow-y-auto bg-background shadow-2xl border-t border-accent-dark opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 rounded-b-sm p-8 z-50">
                                    <div className="grid grid-cols-3 gap-x-10 gap-y-8">
                                        {collectionMenu.map((category) => (
                                            <div key={category._id}>
                                                <Link href={`/product?category=${category._id}`} className="text-[12px] uppercase tracking-[0.22em] font-bold text-secondary hover:text-primary transition-colors block mb-4">
                                                    {category.name}
                                                </Link>
                                                <div className="space-y-4">
                                                    {(category.children || []).map((subCategory) => (
                                                        <div key={subCategory._id}>
                                                            <Link href={`/product?category=${category._id}&subCategory=${subCategory._id}`} className="text-[11px] uppercase tracking-widest text-secondary/70 hover:text-primary transition-colors block">
                                                                {subCategory.name}
                                                            </Link>
                                                            {(subCategory.children || []).length > 0 && (
                                                                <ul className="mt-2 space-y-2 border-l border-border pl-3">
                                                                    {subCategory.children.map((subSubCategory) => (
                                                                        <li key={subSubCategory._id}>
                                                                            <Link href={`/product?category=${category._id}&subCategory=${subCategory._id}&subSubCategory=${subSubCategory._id}`} className="text-[10px] uppercase tracking-widest text-secondary/40 hover:text-primary transition-colors block">
                                                                                {subSubCategory.name}
                                                                            </Link>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </nav>

                        {/* Logo - Centered */}
                        <div className="flex-shrink-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                            <Link href="/">
                                <h1 className="text-2xl sm:text-3xl font-serif font-bold tracking-tighter text-secondary">
                                    MONSTA<span className="text-primary">.</span>
                                </h1>
                            </Link>
                        </div>

                        {/* Actions - Right Side */}
                        <div className="flex items-center gap-2 sm:gap-6">
                            {/* Search */}
                            <button className="p-2 text-secondary hover:text-primary transition-colors hidden sm:block">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </button>

                            {/* Wishlist */}
                            <Link href="/wish-list" className=" hidden lg:block p-2 text-secondary hover:text-primary transition-colors relative group">
                                <svg className="w-5 h-5" fill={wishlistItems?.length ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                                <span className="absolute top-0 right-0 bg-secondary text-accent text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center">{wishlistItems?.length || 0}</span>
                            </Link>

                            {/* Cart */}
                            <Link href="/cart" className=" relative hidden lg:block p-2 text-secondary hover:text-primary transition-colors flex items-center gap-2 group">
                                <div className="relative">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                                    <span className="absolute -top-2 -right-2 bg-secondary text-accent text-[9px] font-bold h-4 w-4 rounded-full flex items-center justify-center">{cartItems?.length}</span>
                                </div>
                                <span className="absolute group-hover:block bottom-[-10px] right-0  hidden text-[11px] font-bold uppercase tracking-widest mt-[2px]">Cart</span>
                            </Link>

                            {/* Theme Toggle */}
                            <button
                                onClick={toggleTheme}
                                className="p-2 text-secondary hover:text-primary transition-colors focus:outline-none"
                                aria-label="Toggle Theme"
                            >
                                {mounted && theme === 'light' ? (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                    </svg>
                                ) : mounted ? (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21m9.75-9h-2.25M5.25 12H3m16.357-7.357l-1.591 1.591M6.414 17.586l-1.591 1.591M17.586 17.586l1.591 1.591M6.414 6.414l1.591-1.591M12 7.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9z" />
                                    </svg>
                                ) : (
                                    <div className="w-5 h-5" />
                                )}
                            </button>

                            {mounted && token ?
                                (
                                    pathname === "/dashboard" ? (
                                        <button
                                            onClick={() => {
                                                dispatch(removeToken());
                                                router.push("/");
                                            }}
                                            className="p-2 text-secondary hover:text-primary transition-colors focus:outline-none  flex gap-2 items-center"
                                        >
                                            {/* Logout Icon */}
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                            </svg>
                                            <p className="text-[11px] font-bold uppercase tracking-widest mt-[2px]">Logout</p>
                                        </button>
                                    ) : (
                                        <Link href="/dashboard" className="p-2 text-secondary hover:text-primary transition-colors focus:outline-none">
                                            dashboard
                                        </Link>
                                    )
                                )
                                :
                                (
                                    ""
                                )}
                        </div>

                    </div>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            <div
                className={`fixed inset-0 z-[200] lg:hidden transition-all duration-500 ${isMobileMenuOpen ? 'visible' : 'invisible'}`}
            >
                {/* Overlay */}
                <div
                    className={`absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity duration-500 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                />

                {/* Drawer */}
                <div
                    className={`absolute left-0 top-0 bottom-0 w-[80%] max-w-sm bg-background shadow-2xl transition-transform duration-500 ease-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
                >
                    <div className="flex flex-col h-full p-8">
                        <div className="flex justify-between items-center mb-12">
                            <h2 className="text-2xl font-serif font-bold tracking-tighter text-secondary">
                                MONSTA<span className="text-primary">.</span>
                            </h2>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 text-secondary hover:text-primary transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>

                        <nav className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg font-bold uppercase tracking-[0.2em] text-secondary hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/cart"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-lg font-bold uppercase tracking-[0.2em] text-secondary hover:text-primary transition-colors"
                            >
                                cart
                            </Link>
                            <Link
                                href="/wish-list"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-lg font-bold uppercase tracking-[0.2em] text-secondary hover:text-primary transition-colors"
                            >
                                Wish List
                            </Link>
                            <div className="h-px bg-border my-6" />
                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-secondary">Collection</p>
                            {collectionMenu.map((category) => (
                                <div key={category._id} className="space-y-3">
                                    <Link
                                        href={`/product?category=${category._id}`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-sm font-bold uppercase tracking-widest text-secondary hover:text-primary transition-colors block"
                                    >
                                        {category.name}
                                    </Link>
                                    {(category.children || []).map((subCategory) => (
                                        <div key={subCategory._id} className="pl-4 space-y-2 border-l border-border">
                                            <Link
                                                href={`/product?category=${category._id}&subCategory=${subCategory._id}`}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="text-xs uppercase tracking-widest text-secondary/60 hover:text-primary transition-colors block"
                                            >
                                                {subCategory.name}
                                            </Link>
                                            {(subCategory.children || []).map((subSubCategory) => (
                                                <Link
                                                    key={subSubCategory._id}
                                                    href={`/product?category=${category._id}&subCategory=${subCategory._id}&subSubCategory=${subSubCategory._id}`}
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                    className="text-[11px] uppercase tracking-widest text-secondary/40 hover:text-primary transition-colors block pl-4"
                                                >
                                                    {subSubCategory.name}
                                                </Link>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </nav>

                        <div className="mt-auto pt-10">
                            <div className="flex flex-col gap-4 text-[11px] uppercase tracking-[0.2em] font-bold text-secondary">
                                <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>Login</Link>
                                <Link href="/register" onClick={() => setIsMobileMenuOpen(false)}>Register</Link>
                                <Link href="/wish-list" onClick={() => setIsMobileMenuOpen(false)}>My Wishlist</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
