import { LockClosedIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
    const navigate = useNavigate()
    const [showPage, setShowPage] = useState("Singup")

    const SingUp = (e) => {
        e.preventDefault()
        console.log(e.target[1].value)
        localStorage.setItem('name', e.target[1].value)
        localStorage.setItem('email', e.target[2].value)
        localStorage.setItem('password', e.target[3].value)
        localStorage.setItem('remeber', e.target[4].checked)
        navigate("/board")

    }

    const Login = (e) => {
        e.preventDefault()

        if (e.target[1].value === localStorage.getItem('email')) {
            if (e.target[2].value === localStorage.getItem('password')) {
                navigate("/board")
            } else {
                alert("A senha não confere")
            }
        } else {
            alert("O e-mail não confere")
        }

    }

    useEffect(() => {
        const auth = localStorage.getItem('remeber')
        if (auth) {
            alert("você já está logado")
            navigate("/board")
        }
    }, [])

    return (
        <>
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    {/* cabeçalho */}
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=violet&shade=600"
                            alt="Your Company"
                        />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                            Entre na sua conta
                        </h2>
                    </div>
                    {/* formulário de envio */}
                    <form className="mt-8 space-y-6" onSubmit={showPage ? Login : SingUp}>
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="-space-y-px rounded-md shadow-sm">
                            {/* fields */}
                            {!showPage ? <div>
                                <input
                                    id="Name"
                                    name="Name"
                                    type="Name"
                                    autoComplete="Name"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-violet-500 focus:outline-none focus:ring-violet-500 sm:text-sm"
                                    placeholder="Name"
                                />
                            </div> : null}
                            <div>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-violet-500 focus:outline-none focus:ring-violet-500 sm:text-sm"
                                    placeholder="Email address"
                                />
                            </div>
                            <div>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-violet-500 focus:outline-none focus:ring-violet-500 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>

                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">

                                <button onClick={() => setShowPage(!showPage)} href="#" className="font-medium text-violet-600 hover:text-violet-500">
                                    {showPage ? 'Do you not have account? SingUp' : 'Have account? singIn'}
                                </button>
                            </div>
                        </div>


                        <div>
                            <button

                                type="submit"
                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-violet-600 py-2 px-4 text-sm font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
                            >
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <LockClosedIcon className="h-5 w-5 text-violet-500 group-hover:text-violet-400" aria-hidden="true" />
                                </span>
                                {showPage ? ' Sign in' : 'Sing Up'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}