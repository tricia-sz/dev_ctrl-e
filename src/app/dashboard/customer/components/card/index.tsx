export function CardCustomer() {
    return (
        <>
            <article className="flex flex-col bg-gray-100 border-2 p-2 rounded-lg gap-3 hover:scale-105 duration-300">
                <h2 className="">
                    <a className="font-bold">Nome:</a> Novo Mercado
                </h2>
                <p><a className="font-bold">E-mail: </a>teste@gmail.com</p>
                <p><a className="font-bold">Telefone:</a> (11) 96237484362</p>

                <button className="bg-red-500 px-4 rounded text-white mt-2 self-start">
                    Deletar
                </button>
            </article>

        </>
    )
}