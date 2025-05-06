    "use client"

    import { useState } from "react"
    import { Link } from 'react-router-dom'
    import SignupImage from "../assets/Praxia signup.png";


    export default function SignupPage() {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="flex min-h-screen w-screen bg-[#003b73] overflow-hidden relative">
        {/* Form content */}
        <div className="w-full lg:w-1/2 text-white p-6 md:p-8 lg:p-12 flex flex-col z-10 text-sm">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <img src="src/assets/logo.png" alt="Logo de Praxia" className="h-8 w-auto" />
                <span className="text-xl font-semibold">Praxia</span>
            </div>


            {/* Form */}
            <div className="max-w-md mx-auto w-full mt-5">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Crear una Cuenta</h1>
            <p className="text-[#d4e9f7]/80 mb-6 md:mb-8">Por favor, completa tus datos para crear una cuenta</p>

            <form className="space-y-5" autoComplete="off">
                <div className="space-y-1.5">
                <label htmlFor="fullName" className="block text-sm">
                    Tu nombre completo<span className="text-[#ff3d00]">*</span>
                </label>
                <input
                    id="fullName"
                    placeholder="Ingresa tu nombre"
                    className="w-full bg-[#d9eaf5]/20 border-0 text-white placeholder:text-[#d4e9f7]/50 h-12 px-3 rounded focus:outline-none focus:bg-[#d9eaf5]/30 transition-colors"
                    autoComplete="off"
                />
                </div>

                <div className="space-y-1.5">
                <label htmlFor="email" className="block text-sm">
                    Tu correo electrónico<span className="text-[#ff3d00]">*</span>
                </label>
                <input
                    id="email"
                    type="email"
                    placeholder="Ingresa tu correo"
                    className="w-full bg-[#d9eaf5]/20 border-0 text-white placeholder:text-[#d4e9f7]/50 h-12 px-3 rounded focus:outline-none focus:bg-[#d9eaf5]/30 transition-colors"
                    autoComplete="off"
                />
                </div>

                <div className="space-y-1.5">
                <label htmlFor="password" className="block text-sm">
                    Contraseña<span className="text-[#ff3d00]">*</span>
                </label>
                <div className="relative">
                    <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Ingresa la contraseña"
                    className="w-full bg-[#d9eaf5]/20 border-0 text-white placeholder:text-[#d4e9f7]/50 h-12 px-3 pr-10 rounded focus:outline-none focus:bg-[#d9eaf5]/30 transition-colors"
                    autoComplete="new-password"
                    />
                    <button
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#d4e9f7] hover:opacity-80 transition-opacity"
                    onClick={(e) => {
                        e.preventDefault()
                        setShowPassword(!showPassword)
                    }}
                    type="button"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                        <circle cx="12" cy="12" r="3" />
                    </svg>
                    </button>
                </div>
                </div>

                <div className="flex items-center space-x-2">
                <input type="checkbox" id="terms" className="h-4 w-4 border-[#d4e9f7] rounded" />
                <label htmlFor="terms" className="text-sm font-medium">
                    Acepto los términos y condiciones
                </label>
                </div>

                <button className="w-full bg-[#d9eaf5] text-[#003b73] font-medium py-3 rounded hover:bg-[#c5e0f5] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:shadow-none">
                Registrarse
                </button>

                <div className="flex items-center gap-4 my-4">
                <div className="h-px bg-[#d4e9f7]/20 flex-1"></div>
                <span className="text-[#d4e9f7]/60 text-sm">o</span>
                <div className="h-px bg-[#d4e9f7]/20 flex-1"></div>
                </div>

                <button className="w-full bg-[#1e1e1e] text-white font-medium py-3 rounded flex items-center justify-center gap-2 hover:bg-[#181818] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:shadow-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                    <path fill="none" d="M1 1h22v22H1z" />
                </svg>
                Registrarse con Google
                </button>

                <div className="min-h-screen overflow-auto">
        ¿Ya tienes una cuenta?{" "}
        <Link to="/login" className="text-blue-400 hover:underline">
            Inicia sesión
        </Link>
        </div>
            </form>
            </div>
        </div>

        {/* Image overlay */}
        <div className="hidden lg:flex absolute right-0 top-0 w-1/2 h-full bg-[#003b73] items-center justify-center">
            <img src={SignupImage} alt="Person wearing VR headset" className="object-contain w-full max-h-screen mt-[-735px]" />
        </div>
        </div>
    )
    }
