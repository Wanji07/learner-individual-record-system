export default function Footer() {
    return(
        <>
            <footer id="container" className="bg-blue-950 border-t border-white border-opacity-20 mt-auto">
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-100 mb-8">
                        <div>
                            <h3 className="text-blue-100 font-bold text-lg mb-4">LIR System</h3>
                            <p className="text-blue-200 text-sm leading-relaxed">
                                Learners Individual Record System for managing student profiles, attendance, and academic records.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-blue-100 font-bold text-lg mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><a href="#profile" className="text-blue-200 hover:text-white transition-colors text-sm">Profile</a></li>
                                <li><a href="#attendance" className="text-blue-200 hover:text-white transition-colors text-sm">Attendance</a></li>
                                <li><a href="#gradebook" className="text-blue-200 hover:text-white transition-colors text-sm">Gradebook</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-white border-opacity-10 pt-8">
                        <p className="text-blue-300 text-sm text-center">
                            &copy; 2026 Learners Individual Record System. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}