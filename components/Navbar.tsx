import Link from "next/link";

export default function Navbar(){

    return(
        <header className="w-full bg-green-950 border-b shadow-sm opacity-95">
            <nav className="max-w-7xl mx-auto py-4 flex items-center justify-between">
                <Link href="/" 
                className="flex items-center gap-2 text-2xl font-bold text-white font-serif">
                    PetCare
                </Link>

                <div className="flex items-center gap-8">
                    <Link href="/" 
                    className="text-white hover:text-[#e2d297] transition text-xl font-serif">
                        Cadastrar Serviço
                    </Link>

                    <Link href="/servicos" className="text-white hover:text-[#e7daa8] transition text-xl font-serif">
                        Serviços 
                    </Link>
                </div>
            </nav>
        </header>
    )
}