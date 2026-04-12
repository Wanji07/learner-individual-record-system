import StudentImage from '../assets/Student.jpg'

export default function PersonalInformation() {
    return(
        <>
            <div id="personal-info-container" className="h-screen relative grid lg:grid-cols-[1fr_5fr] bg-zinc-50">
                <div id="info-aside" className="relative lg:col-span-1 bg-white border-amber-200">
                    
                    <div id="title" className="flex p-2 justify-center">
                        Learner’s Individual Report 
                    </div>
                    <div id="tab" className="flex justify-center w-full p-2 ">
                        <p>Profile</p>
                    </div>
                    
                    <div id="student-info" className="absolute inset-0 flex flex-col justify-center items-center">
                        <img src={StudentImage} className="rounded-full shadow-sm lg:w-25 h-auto"/>
                        <h2 className="leading-10 font-semibold lg:text-xl text-[#0e1111]">William Miguel Enriquez</h2>
                        <p className="tracking-wide opacity-90 text-[#0e1111]">LRN: 482742150031</p>
                    </div>
                </div>
                <div id="info-main" className="pl-5 flex flex-col justify-center bg-zinc-50">
                    <h1 className="tracking-wide text-[#ef8600] font-semibold text-shadow-2xl ">Personal Information</h1>
                    <form className="space-y-5 bg-white shadow-sm p-5 rounded-2xl w-max">
                        <div id="name-input-container" className="flex flex-row justify-center items-center gap-5">
                        <label htmlFor="lastNameInput" className="p-2 text-[#0e1111]">
                            Name:
                        </label>
                        <input
                            type="text"
                            id="lastNameInput"
                            placeholder="LAST NAME"
                            className="max-w-md rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm font-medium tracking-wide text-zinc-800 shadow-sm outline-none transition-all duration-200 placeholder:text-zinc-400 hover:border-zinc-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                        />
                        <input
                            type="text"
                            id="firstNameInput"
                            placeholder="FIRST NAME"
                            className="max-w-md rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm font-medium tracking-wide text-zinc-800 shadow-sm outline-none transition-all duration-200 placeholder:text-zinc-400 hover:border-zinc-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                        />
                        <input
                            type="text"
                            id="middleNameInput"
                            placeholder="MIDDLE NAME"
                            className="max-w-md rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm font-medium tracking-wide text-zinc-800 shadow-sm outline-none transition-all duration-200 placeholder:text-zinc-400 hover:border-zinc-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                        />
                        </div>
                        <div id="grid-input-container" className="grid grid-cols-2 grid-rows-3">
                            <div id="grade-input" className="flex justify-center items-center gap-5 col-span-1 row-span-1">
                                <label htmlFor="gradeSectionInput" className="text-[#0e1111]">
                                    Grade & Section
                                </label>
                                <input
                                    type="text"
                                    id="gradeSectionInput"
                                    className="max-w-md rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm font-medium tracking-wide text-zinc-800 shadow-sm outline-none transition-all duration-200 placeholder:text-zinc-400 hover:border-zinc-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                                />
                            </div>
                            <div id="grade-input" className="flex justify-center items-center gap-5 col-span-1 row-span-1">
                                <label htmlFor="gradeSectionInput" className="text-[#0e1111]">
                                    Gender
                                </label>
                                <input
                                    type="text"
                                    id="genderInput"
                                    className="max-w-md rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm font-medium tracking-wide text-zinc-800 shadow-sm outline-none transition-all duration-200 placeholder:text-zinc-400 hover:border-zinc-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                                />
                            </div>
                            <div id="grade-input" className="flex justify-center items-center gap-5 col-span-1 row-span-1">
                                <label htmlFor="gradeSectionInput" className="text-[#0e1111]">
                                    Learner's Reference Number
                                </label>
                                <input
                                    type="text"
                                    id="LRNInput"
                                    className="max-w-md rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm font-medium tracking-wide text-zinc-800 shadow-sm outline-none transition-all duration-200 placeholder:text-zinc-400 hover:border-zinc-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                                />
                            </div>
                            <div id="grade-input" className="flex justify-center items-center gap-5 col-span-1 row-span-1">
                                <label htmlFor="gradeSectionInput" className="text-[#0e1111]">
                                    Birth Date
                                </label>
                                <input
                                    type="text"
                                    id="birthDateInput"
                                    className="max-w-md rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm font-medium tracking-wide text-zinc-800 shadow-sm outline-none transition-all duration-200 placeholder:text-zinc-400 hover:border-zinc-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                                />
                            </div>
                            <div id="grade-input" className="flex justify-center items-center gap-5 col-span-1 row-span-1">
                                <label htmlFor="gradeSectionInput" className="text-[#0e1111]">
                                    Citizenship
                                </label>
                                <input
                                    type="text"
                                    id="citizenshipInput"
                                    className="max-w-md rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm font-medium tracking-wide text-zinc-800 shadow-sm outline-none transition-all duration-200 placeholder:text-zinc-400 hover:border-zinc-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                                />
                            </div>
                            <div id="grade-input" className="flex justify-center items-center gap-5 col-span-1 row-span-1">
                                <label htmlFor="gradeSectionInput" className="text-[#0e1111]">
                                    Age
                                </label>
                                <input
                                    type="text"
                                    id="ageInput"
                                    className="max-w-md rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm font-medium tracking-wide text-zinc-800 shadow-sm outline-none transition-all duration-200 placeholder:text-zinc-400 hover:border-zinc-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}