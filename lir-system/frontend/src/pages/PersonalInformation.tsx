import StudentImage from '../assets/Student.jpg'

export default function PersonalInformation() {
    return(
        <>
            <div id="personal-info-container" className="relative grid min-h-screen lg:grid-cols-[minmax(260px,1fr)_minmax(0,3fr)] bg-zinc-50">
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
                <div id="info-main" className="px-5 py-8 lg:px-8 flex flex-col justify-center bg-zinc-50">
                <form className="mt-4 w-full max-w-6xl space-y-5 rounded-2xl bg-white p-5 shadow-sm">
                    <div id="info-main-header" className="flex flex-row justify-between items-center">
                        <h1 className="tracking-wide text-[#ef8600] font-semibold text-shadow-2xl ">Personal Information</h1>
                        <input 
                            type="submit"
                            id="info-submit"
                            value="UPDATE"
                            className="cursor-pointer bg-red-500 rounded-lg lg:w-50 px-5 py-2.5 text-md font-semibold tracking-wide text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-400 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 active:translate-y-0"
                        />
                    </div> 
                    <hr className="h-px border-0 bg-linear-to-r from-transparent via-gray-900/50 to-transparent" />
                        <div id="name-input-container" className="flex flex-row items-center justify-center gap-2">
                            <label htmlFor="lastNameInput" className="p-2 text-[#0e1111]">
                                Name:
                            </label>
                            <input
                                type="text"
                                id="lastNameInput"
                                placeholder="LAST NAME"
                                className="w-md rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm font-medium tracking-wide text-zinc-800 shadow-sm outline-none transition-all duration-200 placeholder:text-zinc-400 hover:border-zinc-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                            />
                            <input
                                type="text"
                                id="firstNameInput"
                                placeholder="FIRST NAME"
                                className="w-md rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm font-medium tracking-wide text-zinc-800 shadow-sm outline-none transition-all duration-200 placeholder:text-zinc-400 hover:border-zinc-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                            />
                            <input
                                type="text"
                                id="middleNameInput"
                                placeholder="MIDDLE NAME"
                                className="w-md rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm font-medium tracking-wide text-zinc-800 shadow-sm outline-none transition-all duration-200 placeholder:text-zinc-400 hover:border-zinc-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                            />
                        </div>
                        <div id="student-info-container" className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                            <div id="grade-input" className="flex flex-col gap-2 col-span-1 row-span-1">
                                <label htmlFor="gradeSectionInput" className="text-[#0e1111]">
                                    Grade & Section:
                                </label>
                                <input
                                    type="text"
                                    id="gradeSectionInput"
                                    className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm font-medium tracking-wide text-zinc-800 shadow-sm outline-none transition-all duration-200 placeholder:text-zinc-400 hover:border-zinc-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                                />
                            </div>
                            <div id="grade-input" className="flex flex-col gap-2 col-span-1 row-span-1">
                                <label htmlFor="gradeSectionInput" className="text-[#0e1111]">
                                    Gender:
                                </label>
                                <input
                                    type="text"
                                    id="genderInput"
                                    className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm font-medium tracking-wide text-zinc-800 shadow-sm outline-none transition-all duration-200 placeholder:text-zinc-400 hover:border-zinc-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                                />
                            </div>
                            <div id="grade-input" className="flex flex-col gap-2 col-span-1 row-span-1">
                                <label htmlFor="gradeSectionInput" className="text-[#0e1111]">
                                    Learner's Reference Number:
                                </label>
                                <input
                                    type="text"
                                    id="LRNInput"
                                    className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm font-medium tracking-wide text-zinc-800 shadow-sm outline-none transition-all duration-200 placeholder:text-zinc-400 hover:border-zinc-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                                />
                            </div>
                            <div id="grade-input" className="flex flex-col gap-2 col-span-1 row-span-1">
                                <label htmlFor="gradeSectionInput" className="text-[#0e1111]">
                                    Birth Date:
                                </label>
                                <input
                                    type="text"
                                    id="birthDateInput"
                                    className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm font-medium tracking-wide text-zinc-800 shadow-sm outline-none transition-all duration-200 placeholder:text-zinc-400 hover:border-zinc-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                                />
                            </div>
                            <div id="grade-input" className="flex flex-col gap-2 col-span-1 row-span-1">
                                <label htmlFor="gradeSectionInput" className="text-[#0e1111]">
                                    Citizenship:
                                </label>
                                <input
                                    type="text"
                                    id="citizenshipInput"
                                    className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm font-medium tracking-wide text-zinc-800 shadow-sm outline-none transition-all duration-200 placeholder:text-zinc-400 hover:border-zinc-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                                />
                            </div>
                            <div id="grade-input" className="flex flex-col gap-2 col-span-1 row-span-1">
                                <label htmlFor="gradeSectionInput" className="text-[#0e1111]">
                                    Age:
                                </label>
                                <input
                                    type="text"
                                    id="ageInput"
                                    className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm font-medium tracking-wide text-zinc-800 shadow-sm outline-none transition-all duration-200 placeholder:text-zinc-400 hover:border-zinc-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                                />
                            </div>
                        </div>
                        <label htmlFor="houseNumberInput" className="text-[#0e1111]">
                            Permanent Address:
                        </label>
                        <div id="address-container" className="w-full mt-2 gap-2 grid lg:grid-cols-5 lg:grid-rows-2 place-items-center">
                                <input
                                    type="text"
                                    id="houseNumberInput"
                                    placeholder="Unit/ House #"
                                    className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm font-medium tracking-wide text-zinc-800 shadow-sm outline-none transition-all duration-200 placeholder:text-zinc-400 hover:border-zinc-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                                />
                                <input
                                    type="text"
                                    id="houseNumberInput"
                                    placeholder="Street"
                                    className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm font-medium tracking-wide text-zinc-800 shadow-sm outline-none transition-all duration-200 placeholder:text-zinc-400 hover:border-zinc-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                                />
                                <input
                                    type="text"
                                    id="houseNumberInput"
                                    placeholder="Barangay"
                                    className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm font-medium tracking-wide text-zinc-800 shadow-sm outline-none transition-all duration-200 placeholder:text-zinc-400 hover:border-zinc-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                                />
                                <input
                                    type="text"
                                    id="houseNumberInput"
                                    placeholder="City"
                                    className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm font-medium tracking-wide text-zinc-800 shadow-sm outline-none transition-all duration-200 placeholder:text-zinc-400 hover:border-zinc-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                                />
                                <input
                                    type="text"
                                    id="houseNumberInput"
                                    placeholder="Zip Code"
                                    className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm font-medium tracking-wide text-zinc-800 shadow-sm outline-none transition-all duration-200 placeholder:text-zinc-400 hover:border-zinc-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                                />
                                <input
                                    type="text"
                                    id="houseNumberInput"
                                    placeholder="Province"
                                    className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm font-medium tracking-wide text-zinc-800 shadow-sm outline-none transition-all duration-200 placeholder:text-zinc-400 hover:border-zinc-400 focus:border-amber-500 focus:ring-2 focus:ring-amber-200"
                                />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}