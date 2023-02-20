export interface IModalProps {
    show: boolean
    title?: string
    decorator?: React.ReactNode
    children: React.ReactNode
    onClose: () => void
  }