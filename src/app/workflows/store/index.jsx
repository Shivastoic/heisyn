'use client';

import { useState } from "react";
import { FaFilter, FaAngleDown } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function WorkflowStore() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [sortBy, setSortBy] = useState("featured");
    const [expandedCategories, setExpandedCategories] = useState(true);

    const categories = [
        "All Workflows",
        "Marketing & Sales",
        "Data Processing",
        "Social Media",
        "E-commerce",
        "Productivity",
        "Integration",
        "Analytics",
        "Communication",
        "Finance"
    ];

    const sortOptions = [
        { value: "featured", label: "Featured" },
        { value: "price-low", label: "Price: Low to High" },
        { value: "price-high", label: "Price: High to Low" },
        { value: "newest", label: "Newest First" },
        { value: "popular", label: "Most Popular" },
        { value: "rating", label: "Highest Rated" }
    ];

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    // Generate dummy workflow cards
    const workflowCards = Array.from({ length: 24 }, (_, i) => i + 1);

    return (
        <section className="min-h-screen bg- rounded-2xl">
            {/* Mobile Filter Button */}
            <div className="md:hidden sticky top-0 z-40 bg-white/15 border-b border-gray-700 px-4 py-3">
                <button
                    onClick={toggleSidebar}
                    className="flex items-center gap-2 text-gray-200 hover:text-white transition-colors"
                >
                    <FaFilter className="w-5 h-5" />
                    <span className="font-medium text-gray-200">Filters</span>
                </button>
            </div>

            <div className="flex">
                {/* Sidebar - Desktop */}
                <div className="hidden md:block h-screen w-80 py-4 sticky top-0">

                
                <div className=" bg-white/7 backdrop-blur-md rounded-2xl h-full w-full  overflow-y-auto sidebar-scroll">
                    <div className="p-6">
                        <h2 className="text-xl font-bold text-gray-100 mb-6">Filters</h2>
                        
                        {/* Categories */}
                        <div className="mb-8">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-lg font-semibold text-gray-200">Categories</h3>
                                <button
                                    onClick={() => setExpandedCategories(!expandedCategories)}
                                    className="text-gray-400 hover:text-gray-200"
                                >
                                    <FaAngleDown className={`w-5 h-5 transition-transform ${expandedCategories ? 'rotate-180' : ''}`} />
                                </button>
                            </div>
                            
                            {expandedCategories && (
                                <div className="space-y-2">
                                    {categories.map((category, index) => (
                                        <label key={category} className="flex items-center cursor-pointer group">
                                            <input
                                                type="radio"
                                                name="category"
                                                value={index === 0 ? "all" : category.toLowerCase().replace(/\s+/g, '-') }
                                                checked={selectedCategory === (index === 0 ? "all" : category.toLowerCase().replace(/\s+/g, '-'))}
                                                onChange={(e) => setSelectedCategory(e.target.value)}
                                                className="w-4 h-4 text-blue-500 border-gray-500 focus:ring-blue-500"
                                            />
                                            <span className="ml-3 text-gray-300 group-hover:text-gray-100 transition-colors">
                                                {category}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Sort By */}
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold text-gray-200 mb-4">Sort By</h3>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                            >
                                {sortOptions.map((option) => (
                                    <option key={option.value} value={option.value} className="text-neutral-100">
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Price Range */}
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold text-gray-200 mb-4">Price Range</h3>
                            <div className="space-y-2">
                                {["Free", "$1 - $25", "$26 - $50", "$51 - $100", "$100+"].map((price) => (
                                    <label key={price} className="flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="w-4 h-4 text-blue-500 border-gray-500 focus:ring-blue-500"
                                        />
                                        <span className="ml-3 text-gray-300">{price}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                </div>

                {/* Mobile Sidebar Overlay */}
                {sidebarOpen && (
                    <div className="md:hidden fixed inset-0 z-50 flex">
                        {/* Backdrop */}
                        <div 
                            className="fixed inset-0 bg-white/5 "
                            onClick={toggleSidebar}
                        />
                        
                        {/* Sidebar */}
                        <div className="relative bg-white/15 w-80 max-w-xs h-full overflow-y-auto">
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-xl font-bold text-gray-100">Filters</h2>
                                    <button
                                        onClick={toggleSidebar}
                                        className="text-gray-400 hover:text-gray-200"
                                    >
                                        <IoMdClose className="w-6 h-6" />
                                    </button>
                                </div>
                                
                                {/* Categories */}
                                <div className="mb-8">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-lg font-semibold font-poppins text-gray-100">Categories</h3>
                                        <button
                                            onClick={() => setExpandedCategories(!expandedCategories)}
                                            className="text-gray-400 hover:text-gray-200"
                                        >
                                            <FaAngleDown className={`w-5 h-5 transition-transform ${expandedCategories ? 'rotate-180' : ''}`} />
                                        </button>
                                    </div>
                                    
                                    {expandedCategories && (
                                        <div className="space-y-2">
                                            {categories.map((category, index) => (
                                                <label key={category} className="flex items-center cursor-pointer group">
                                                    <input
                                                        type="radio"
                                                        name="category-mobile"
                                                        value={index === 0 ? "all" : category.toLowerCase().replace(/\s+/g, '-') }
                                                        checked={selectedCategory === (index === 0 ? "all" : category.toLowerCase().replace(/\s+/g, '-'))}
                                                        onChange={(e) => setSelectedCategory(e.target.value)}
                                                        className="size-4 text-blue-500 border-gray-500 focus:ring-blue-500"
                                                    />
                                                    <span className="ml-3 text-gray-400 font-poppins group-hover:text-white transition-colors">
                                                        {category}
                                                    </span>
                                                </label>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Sort By */}
                                <div className="mb-8">
                                    <h3 className="text-lg font-semibold text-gray-200 mb-4">Sort By</h3>
                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                                    >
                                        {sortOptions.map((option) => (
                                            <option key={option.value} value={option.value} className="text-gray-900">
                                                {option.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Price Range */}
                                <div className="mb-8">
                                    <h3 className="text-lg font-semibold text-gray-200 mb-4">Price Range</h3>
                                    <div className="space-y-2">
                                        {["Free", "$1 - $25", "$26 - $50", "$51 - $100", "$100+"].map((price) => (
                                            <label key={price} className="flex items-center cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    className="w-4 h-4 text-blue-500 border-gray-500 focus:ring-blue-500"
                                                />
                                                <span className="ml-3 text-gray-300">{price}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="flex-1">
                    <div className="p-6">
                        {/* Header */}
                        <div className="mb-8">
                            <h1 className="text-3xl font-montserrat font-bold text-gray-100 mb-2">N8N Workflow Store</h1>
                            <p className="text-gray-400 font-montserrat">Discover and download powerful automation workflows</p>
                        </div>

                        {/* Workflow Cards Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {workflowCards.map((card) => (
                                <div
                                    key={card}
                                    className="bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-500 hover:shadow-md transition-all duration-200 cursor-pointer"
                                >
                                    {/* Square placeholder div */}
                                    <div className="aspect-square bg-gray-800 rounded-t-lg"></div>
                                    
                                    {/* Card content area for future use */}
                                    <div className="p-4">
                                        {/* Empty space for you to add content */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
