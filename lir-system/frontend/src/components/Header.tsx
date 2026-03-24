export default function Header() {
    return(
        <>
            <header id="container" className="bg-white shadow-lg sticky top-0 z-50">
                <nav className="flex flex-row justify-around items-center px-6 py-4 gap-4 max-w-7xl mx-auto">
                    <button className="border border-blue-900 border-opacity-30 px-4 py-2 rounded-lg font-semibold text-blue-900 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200">
                        <span>Profile</span>
                    </button>
                    <button className="border border-blue-900 border-opacity-30 px-4 py-2 rounded-lg font-semibold text-blue-900 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200">
                        <span>Attendance</span>
                    </button>
                    <button className="border border-blue-900 border-opacity-30 px-4 py-2 rounded-lg font-semibold text-blue-900 hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200">
                        <span>Gradebook/Class Record</span>
                    </button>
                </nav>
            </header>
        </>
    )
}