"use client"
import { useState } from "react"

export default function Home(){

    const [nome,setNome] = useState("")
    const [valor, setValor] = useState("")

    async function cadastrarServico(e:any) {

        e.preventDefault()

        try {
            const response = await fetch("http://localhost:3001/servicos",{
                method:"POST",
                headers: {"Content-type":"application/json"},

                body:JSON.stringify({
                    nome, 
                    valor
                })
            })

            if(response.ok){
                alert("Serviço cadastrado com sucesso!")
            }
        } catch (error) {
            console.log(error)
            alert("Erro ao cadastrar serviço")
        }
    }

    return(
        <main className="min-h-screen bg-gray-100 p-8">
                <div className="mx-auto max-w-xl rounded-lg bg-white p-8 shadow">
                    <h1 className="mb-6 text-3xl font-bold font-serif text-emerald-950">Cadastrar Serviço</h1>
                    <form className="space-y-5">

                        <div>
                            <label className="font-serif text-xl">Nome</label>
                            <input type="text"
                            value={nome}
                            onChange={(e)=> setNome(e.target.value)}
                            placeholder="Ex: Banho e Tosa"
                            className="w-full rounded border p-3 outline-none focus:ring-emerald-900 focus:ring-2"
                            />
                        </div>

                        <div>
                            <label className="font-serif text-xl">Valor</label>
                            <input type="text"
                            value={valor}
                            onChange={(e)=> setValor(e.target.value)}
                            placeholder="Ex: 80.00"
                            className="w-full rounded border p-3 outline-none focus:ring-emerald-900 focus:ring-2"
                            />
                        </div>

                        <button
                        type="submit"
                        onClick={cadastrarServico}
                        className="w-full rounded bg-emerald-800 py-3 font-semibold text-white font-serif hover:bg-emerald-900 cursor-pointer">
                            Cadastrar
                        </button>
                    </form>
                
                
                </div>
            </main>
    )
}
