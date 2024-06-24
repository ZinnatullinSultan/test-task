export interface ILead{
  key: number
  title: string
  budget: number
  status: ['Принимают решение'] | ['Закрыто и не реализовано'] |['Переговоры']
  name: string
  date: string
  contacts?: string[]
}
export interface IColumn{
  title: string
  dataIndex: string
  key: string
  fixed?: boolean
}