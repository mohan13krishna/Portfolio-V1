import { toast } from 'sonner'

export function useToast() {
  return {
    toast: (props) => {
      const { title, description, variant = 'default' } = props
      
      if (variant === 'destructive') {
        toast.error(title, {
          description,
        })
      } else {
        toast.success(title, {
          description,
        })
      }
    }
  }
}