"use client"
import { useEffect, useState } from "react"

interface Servico {
  id: number
  nome: string
  valor: number
}

export default function Servicos() {

  const [servicos, setServicos] = useState<Servico[]>([])
  const [loading, setLoading] = useState(true)

  async function mostrarServicos() {
    try {
      const response = await fetch("http://localhost:3001/servicos")

      if (!response.ok) {
        throw new Error("Erro ao buscar serviços")
      }

      const data = await response.json()

      setServicos(data)
    } catch (error) {
      console.error("Erro:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    mostrarServicos()
  }, [])

      return (
        <main className="p-8">
          <h1 className="mb-6 text-3xl font-bold font-serif text-emerald-950">
            Serviços
          </h1>

          {loading ? (<p>Carregando serviços...</p>) : (
            <div className="grid grid-cols-3 gap-6">
              {servicos.map((servico) => (

                
                <div
                  key={servico.id}
                  className="rounded-lg border-gray-100 p-4 shadow"
                >

                  <p className="mt-2 font-serif text-xl text-gray-900 font-semibold">
                    {servico.nome}
                  </p>

                  <p className="mt-2 text-lg font-serif text-green-700">
                    R$ {Number(servico.valor).toFixed(2)}
                  </p>
                  
                </div>
              ))}
            </div>
          )}
        </main>
    )
}