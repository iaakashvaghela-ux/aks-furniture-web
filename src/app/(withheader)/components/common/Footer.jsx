import React from 'react';

export default function Footer() {
    const socialLinks = [
        { name: 'Facebook', url: 'https://facebook.com', icon: 'FB' },
        { name: 'Instagram', url: 'https://instagram.com', icon: 'IG' },
        { name: 'Twitter', url: 'https://twitter.com', icon: 'TW' },
        { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'LI' },
        { name: 'YouTube', url: 'https://youtube.com', icon: 'YT' },
        { name: 'Telegram', url: 'https://telegram.com', icon: 'TG' }
    ];

    const infoLinks = [
        { name: 'About Us', url: '/about-us' },
        { name: 'Contact Us', url: '#' },
        { name: 'Frequently Questions', url: '#' }
    ];

    const accountLinks = [
        { name: 'My Dashboard', url: '/dashboard' },
        { name: 'Wishlist', url: '/wish-list' },
        { name: 'Cart', url: '/cart' },
        { name: 'Checkout', url: '/check-out' }
    ];

    const bottomLinks = [
        { name: 'Home', url: '/' },
        { name: 'Online Store', url: '/online-store' },
        { name: 'Privacy Policy', url: '/privacy-policy' },
        { name: 'Terms Of Use', url: '/term-of-use' }
    ];

    const topRatedProducts = [
        {
            name: 'Sapien Sofa Cum Bed',
            category: 'Wooden Sofa Cum Bed',
            oldPrice: '64,000',
            currentPrice: '54,000',
            image: 'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1615277326496Sapien%20Sofa%20Cum%20Bed__.jpg',
            url: '#'
        },
        {
            name: 'Rex Console Table',
            category: 'Console Table',
            oldPrice: '3,000',
            currentPrice: '2,200',
            image: 'https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/products/1617828789760Rex%20Console%20Table__.jpg',
            url: '#'
        }
    ];

    return (
        <footer className="bg-background border-t border-accent-dark font-sans text-secondary">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 text-center md:text-left">

                    {/* Contact Us */}
                    <div className="space-y-6 flex flex-col items-center md:items-start">
                        <h3 className="text-xl font-bold text-secondary pb-2 border-b-2 border-primary inline-block">Contact Us</h3>
                        <div className="space-y-4 text-text-muted">
                            <p className="flex flex-col md:flex-row items-center md:items-start gap-1 md:gap-3">
                                <span className="font-semibold text-secondary min-w-fit">Address:</span>
                                Claritas est etiam processus dynamicus
                            </p>
                            <p className="flex flex-col md:flex-row items-center md:items-start gap-1 md:gap-3">
                                <span className="font-semibold text-secondary min-w-fit">Phone:</span>
                                <a href="tel:98745612330" className="hover:text-primary transition-colors">98745612330</a>
                            </p>
                            <p className="flex flex-col md:flex-row items-center md:items-start gap-1 md:gap-3">
                                <span className="font-semibold text-secondary min-w-fit">Email:</span>
                                <a href="mailto:furnitureinfo@gmail.com" className="hover:text-primary transition-colors text-xs sm:text-sm lg:text-base">furnitureinfo@gmail.com</a>
                            </p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={social.url}
                                        className="w-11 h-11 flex items-center justify-center rounded-full bg-accent border border-border text-secondary/70 hover:bg-primary hover:text-white hover:border-primary transition-all duration-500 shadow-sm group"
                                        title={social.name}
                                    >
                                        <span className="text-[10px] font-bold tracking-tight">{social.icon}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Information */}
                    <div className="space-y-6 flex flex-col items-center md:items-start">
                        <h3 className="text-xl font-bold text-secondary pb-2 border-b-2 border-primary inline-block">Information</h3>
                        <ul className="space-y-4">
                            {infoLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.url} className="text-text-muted hover:text-primary transition-colors block">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* My Account */}
                    <div className="space-y-6 flex flex-col items-center md:items-start">
                        <h3 className="text-xl font-bold text-secondary pb-2 border-b-2 border-primary inline-block">My Account</h3>
                        <ul className="space-y-4">
                            {accountLinks.map((link) => (
                                <li key={link.name}>
                                    <a href={link.url} className="text-text-muted hover:text-primary transition-colors block">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Top Rated Products */}
                    <div className="space-y-6 flex flex-col items-center md:items-start">
                        <h3 className="text-xl font-bold text-secondary pb-2 border-b-2 border-primary inline-block">Top Rated</h3>
                        <div className="space-y-6 w-full max-w-xs md:max-w-none">
                            {topRatedProducts.map((product) => (
                                <div key={product.name} className="flex gap-4 group text-left">
                                    <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 bg-accent rounded-lg overflow-hidden border border-accent-dark">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <span className="text-[10px] text-primary font-medium uppercase tracking-wider">{product.category}</span>
                                        <h4 className="text-sm font-semibold text-secondary hover:text-primary transition-colors line-clamp-1">
                                            <a href={product.url}>{product.name}</a>
                                        </h4>
                                        <div className="flex gap-2 mt-1">
                                            <span className="text-xs text-text-muted line-through">Rs. {product.oldPrice}</span>
                                            <span className="text-xs font-bold text-secondary">Rs. {product.currentPrice}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Middle Menu */}
                <div className="mt-16 py-8 border-t border-accent-dark">
                    <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                        {bottomLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.url} className="text-sm font-medium text-text-muted hover:text-primary transition-colors uppercase tracking-widest text-[10px]">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-accent-dark flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-text-muted">
                        All Rights Reserved By Furniture | © 2026
                    </p>
                    <div className="flex items-center gap-4">
                        <img
                            src="https://wscubetech.co/Assignments/furniture/public/frontend/img/icon/papyel2.png"
                            alt="Payment Methods"
                            className="h-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-300"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
}
