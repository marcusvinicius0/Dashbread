import { LogOut } from 'lucide-react'
import { Button } from '../Button'

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://github.com/marcusvinicius0.png"
        className="h-10 w-10 rounded-full"
        alt="Imagem de perfil do usuário"
      />

      <div className="flex flex-1 flex-col truncate">
        <span className="truncate text-sm font-semibold text-zinc-700">
          Marcus Vinícius B S
        </span>
        <span className="truncate text-sm text-zinc-500">
          marcusvbegheli@gmail.com
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
