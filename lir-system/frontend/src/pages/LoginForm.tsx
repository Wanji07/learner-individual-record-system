import Grainient from '../components/Grainient.jsx';

export default function LoginForm() {
    return(
        <>
            <div id="login-form-container" className="relative isolate overflow-clip grid grid-cols-[2fr_1fr]">
                <div id="login-form-aside" className="absolute inset-0 z-0 pointer-events-none">
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
                <div id="login-form-main">
                    <form>
                        <input type="text"></input>
                    </form>
                </div>
            </div>
        </>
    )
}