export interface SelectOption {
  label: string
  value: string | number
}

export interface TableColumn {
  prop: string
  label: string
  width?: number
  minWidth?: number
  align?: string
  className?: string
  formatter?: (row: any, column: any, cellValue: any, index: number) => any
}

export interface TablePagination {
  currentPage: number
  pageSize: number
  total: number
}
