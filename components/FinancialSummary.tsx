import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"

export function FinancialSummary() {
  const expenses = [
    { category: "Educación", amount: 150000 },
    { category: "Salud", amount: 80000 },
    { category: "Alimentación", amount: 200000 },
    { category: "Vestimenta", amount: 50000 },
  ]

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0)

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Resumen Financiero</h1>
      <div className="flex justify-between items-center mb-4">
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" /> Agregar Gasto
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Gastos por Categoría</CardTitle>
          </CardHeader>
          <CardContent>
            <ul>
              {expenses.map((expense) => (
                <li key={expense.category} className="flex justify-between">
                  <span>{expense.category}</span>
                  <span>${expense.amount.toLocaleString()}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total de Gastos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">${totalExpenses.toLocaleString()}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

