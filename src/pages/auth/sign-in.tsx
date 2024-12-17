import { Helmet } from "react-helmet-async";

export function SignIn() {
  return (
    <>
      <Helmet title="Login" />
      <div className="p-8 ">
        <div className="w-[350px]  flex flex-col justify-center gap-6">
            <div className="flex flex-col gap-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">Acessar Painel</h1>
                <p className="text-sm text-foreground">Acompanhe suas vendas no painel do parceiro!</p>
            </div>

            <form  className="space-y-4 ">
                <div className="space-y-2">
                    
                </div>
                <button type="submit">Acessar painel</button>
            </form>
        </div>
      </div>
    </>
  );
}
