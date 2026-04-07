import Grainient from '../components/Grainient.jsx';
import StudentIcon from '../assets/StudentIcon.svg'
import TeacherIcon from '../assets/TeacherIcon.svg'
import { Link } from 'react-router-dom'

export default function Login() {
    return(
        <>
            <div id="login-container" className="relative isolate overflow-clip grid grid-cols-[2fr_1fr] h-screen">
                <div id="login-background" className="absolute inset-0 z-0 pointer-events-none">
                    <Grainient
                        color1="#d24646"
                        color2="#d09f8a"
                        color3="#ced392"
                        timeSpeed={1.6}
                        colorBalance={-0.11}
                        warpStrength={0.9}
                        warpFrequency={5}
                        warpSpeed={2}
                        warpAmplitude={50}
                        blendAngle={0}
                        blendSoftness={0.05}
                        rotationAmount={500}
                        noiseScale={2}
                        grainAmount={0}
                        grainScale={0.2}
                        grainAnimated={false}
                        contrast={1.5}
                        gamma={1}
                        saturation={1}
                        centerX={0}
                        centerY={0}
                        zoom={0.9}
                    />
                </div>
                <div id="hero-container" className="relative z-20 px-10 col-start-1 flex flex-col items-start justify-center [text-shadow:0_3px_18px_rgba(0,0,0,0.75)]">
                    <h1 className="text-3xl font-semibold tracking-tight text-zinc-100">Learner's Individual Record System</h1>
                    <p className="mt-2 max-w-2xl text-lg font-normal tracking-wide leading-relaxed text-zinc-100">Manage academic records, attendance, and learning modules in one place.</p>
                </div>
                <div id="aside-container" className="relative z-20 col-start-2 flex h-full flex-col justify-center border-l border-white/15 bg-black/60 p-10 shadow-[-14px_0_40px_rgba(0,0,0,0.35)] backdrop-blur-xl backdrop-saturate-150">
                    <h1 className="text-3xl font-semibold tracking-tight text-zinc-100">Choose account type</h1>
                    <p className="mt-2 max-w-sm text-sm leading-relaxed text-zinc-300/90">Select how you want to continue to the Learners Individual Record system.</p>
                    <div id="account-types-container" className="mt-10 grid gap-5">
                        <Link to='/login?role=student' className="cursor-pointer flex items-center gap-5 rounded-2xl border border-white/20 bg-white/5 px-5 py-4 text-left text-zinc-100 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60">
                            <img src={StudentIcon} alt="Student account" className="h-12 w-12 rounded-xl bg-white/10 p-2.5" />
                            <p className="text-lg font-semibold tracking-tight">Login as Student</p>
                        </Link>
                        <Link to='/login?role=teacher' className="cursor-pointer flex items-center gap-5 rounded-2xl border border-white/20 bg-white/5 px-5 py-4 text-left text-zinc-100 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60">
                            <img src={StudentIcon} alt="Student account" className="h-12 w-12 rounded-xl bg-white/10 p-2.5" />
                            <p className="text-lg font-semibold tracking-tight">Login as Student</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}