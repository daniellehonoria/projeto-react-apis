export function GoToHome(navigate){
    navigate("/")
}
export function GoToPokedex(navigate){
    navigate("/pokedex")
}

export function GoToDetailPage(navigate, id){
    navigate(`/pokemon/${id}`)
}