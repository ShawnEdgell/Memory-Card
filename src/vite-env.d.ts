/// <reference types="svelte" />
/// <reference types="vite/client" />

declare module "*.svelte" {
    const Component: any;
    export default Component;
}

export type PokemonType = {
    id: number;
    name: string;
};
