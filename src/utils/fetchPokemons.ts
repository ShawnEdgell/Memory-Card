export async function fetchPokemons(): Promise<any[]> {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=12');
    const data = await response.json();
    return data.results;
}
