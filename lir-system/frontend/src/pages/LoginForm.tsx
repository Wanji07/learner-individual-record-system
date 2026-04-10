import Grainient from '../components/Grainient.jsx';
import { Link } from 'react-router-dom'

export default function LoginForm() {
    return(
        <>
            <div id="login-form-container" className="relative isolate overflow-clip grid min-h-screen grid-cols-1 lg:grid-cols-[1fr_2fr] bg-stone-100">
                <div id="login-form-aside" className="relative h-screen hidden lg:block row-span-1">
                    <div className="absolute inset-0 h-full w-full pointer-events-none">
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
                    <div id="hero-container" className="absolute inset-0 z-20 px-10 flex flex-col text-left items-center justify-center  [text-shadow:0_3px_18px_rgba(0,0,0,0.75)]">
                        <h1 className="text-3xl font-semibold tracking-tight text-zinc-100">Learner's Individual Record System</h1>
                        <p className="mt-2 max-w-2xl text-lg font-normal tracking-wide leading-relaxed text-zinc-100">Manage academic records, attendance, and learning modules in one place.</p>
                    </div>
                </div>
                <div id="login-form-main" className="relative z-20 col-start-1 lg:col-start-2 flex items-center justify-center px-6 py-12 sm:px-10 shadow-[-14px_0_40px_rgba(0,0,0,0.25)]">
                    <div className="flex flex-col gap-5 w-full max-w-xl rounded-3xl border border-stone-200 bg-white p-8 shadow-xl sm:p-10">
                        <div className="flex flex-col gap-1">
                            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">Learner Portal</p>
                            <h1 className="mb-8 text-3xl font-black tracking-tight text-stone-900 sm:text-4xl">Login as Student</h1>
                        </div>
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor='username-input' className="block text-sm font-semibold text-stone-700">Username</label>
                                <input
                                    type="text"
                                    id='username-input'
                                    placeholder="LRN"
                                    className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-900 placeholder:text-stone-400 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor='password-input' className="block text-sm font-semibold text-stone-700">Password</label>
                                <input
                                    type="password"
                                    id='password-input'
                                    placeholder="Default password (SURNAME)"
                                    className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-900 placeholder:text-stone-400 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
                                />
                            </div>
                            <div id="form-buttons-container" className="flex flex-col gap-5 pt-2 sm:flex-row sm:items-center sm:justify-between">
                                <label htmlFor="remember-login" className="inline-flex cursor-pointer items-center gap-3 text-sm font-medium text-stone-600">
                                    <input
                                        type="checkbox"
                                        id='remember-login'
                                        className="h-4 w-4 rounded border-stone-300 text-orange-500 focus:ring-orange-300"
                                    />
                                    Remember Me
                                </label>
                                <div className="flex items-center gap-4">
                                    <Link to="/" className="text-sm font-semibold text-orange-500 transition hover:text-orange-600">
                                        Forgot Password
                                    </Link>
                                    <button
                                        type="submit"
                                        className="rounded-xl bg-orange-400 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-orange-600"
                                    >
                                        Sign In
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}