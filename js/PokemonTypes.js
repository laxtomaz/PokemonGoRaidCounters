// Define the PokemonTypes class
export class PokemonTypes {
    // Array of Pokemon types
    static pokemonTypes = [
        "Normal",
        "Fighting",
        "Flying",
        "Poison",
        "Ground",
        "Rock",
        "Bug",
        "Ghost",
        "Steel",
        "Fire",
        "Water",
        "Grass",
        "Electric",
        "Psychic",
        "Ice",
        "Dragon",
        "Dark",
        "Fairy",
    ];

    static typeCombos; // To store type combinations data

    // Async method to read type combinations data from a JSON file
    static async readJsonFile(relativeFilePath) {
        try {
            const response = await fetch(relativeFilePath);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const jsonData = await response.json();
            this.typeCombos = jsonData;
        } catch (e) {
            console.error(`An error occurred while reading the file: ${e}`);
            return null;
        }
    }
}