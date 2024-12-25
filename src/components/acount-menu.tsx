import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger, DropdownMenuSeparator } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Building, ChevronDown, LogOut } from "lucide-react";


export function AccountMenu() {
    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='outline' className="flex items-center gap-2 select-none ">

                    Pizza Shop
                    <ChevronDown className="w-2 h-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="flex flex-col">
                    <span>João Lucas</span>
                    <span className="text-sm font-normal text-muted-foreground">hpbeta16.l@gmail.com</span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Building className="w-4 h-4 mr-2" />
                    <span>Perfil da loja</span>
                </DropdownMenuItem>

                <DropdownMenuItem className="text-rose-500 dark:text-rose-400">
                    <LogOut className="w-4 h-4 mr-2" />
                    <span>Sair</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}