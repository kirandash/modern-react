// Sample Palette for reference
// {
//     paletteName: "Flat UI Colors Dutch",
//     id: "flat-ui-colors-dutch",
//     emoji: "🇳🇱",
//     colors: [
//         { name: "Sunflower", color: "#FFC312" },
//         { name: "Energos", color: "#C4E538" },
//         { name: "BlueMartina", color: "#12CBC4" },
//         { name: "LavenderRose", color: "#FDA7DF" },
//         { name: "BaraRose", color: "#ED4C67" },
//         { name: "RadiantYellow", color: "#F79F1F" },
//         { name: "AndroidGreen", color: "#A3CB38" },
//         { name: "MediterraneanSea", color: "#1289A7" },
//         { name: "LavenderTea", color: "#D980FA" },
//         { name: "VerryBerry", color: "#B53471" },
//         { name: "PuffinsBill", color: "#EE5A24" },
//         { name: "PixelatedGrass", color: "#009432" },
//         { name: "MerchantMarineBlue", color: "#0652DD" },
//         { name: "ForgottenPurple", color: "#9980FA" },
//         { name: "HollyHock", color: "#833471" },
//         { name: "RedPigment", color: "#EA2027" },
//         { name: "TurkishAqua", color: "#006266" },
//         { name: "20000LeaguesUnderTheSea", color: "#1B1464" },
//         { name: "CircumorbitalRing", color: "#5758BB" },
//         { name: "MagentaPurple", color: "#6F1E51" }
//     ]
// }

import chroma from "chroma-js";
const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

// Generate new Palette from a Starter Palette
function generatePalette(starterPalette) {
    let newPalette = {
        paletteName: starterPalette.paletteName,
        id: starterPalette.id,
        emoji: starterPalette.emoji,
        colors: {} // Mutate colors info using starterPalette
    };
    for (let level of levels) {
        newPalette.colors[level] = [];
    } // colors: { 50: [], 100: [], 200: [].... }
    for (let color of starterPalette.colors) {
        // generate 10 colors and reverse to make the order go from light to dark
        // by default generate colors order is dark to light
        let scale = getScale(color.color, 10).reverse();
        // Add generated colors to new palette
        for (let i in scale) {
            newPalette.colors[levels[i]].push({
                name: `${color.name} ${levels[i]}`, // colorname weight ex: Sunflower 500
                id: color.name.toLowerCase().replace(/ /g, "-"), // reaplace space with -
                hex: scale[i],
                rgb: chroma(scale[i]).css(), // get rgb color
                rgba: chroma(scale[i])
                    .css()
                    .replace("rgb", "rgba") // no built in rgba converter
                    .replace(")", ",1.0)") // rgb(23,45,1) -> rgba(23,45,1,1.0)
            });
        }
    }
    return newPalette;
}

// Fn to generate range of colors based on hex color
function getRange(hexColor) {
    const end = "#fff";
    return [
        chroma(hexColor) // turn hex to chroma color
            .darken(1.4) // darken it
            .hex(), // convert back to hex color
        hexColor,
        end
    ]; // [darkColor, hexColor(original), endColor(white)] better results than [black, color, white]
}

// Fn to generate number of colors based on an input hex color
function getScale(hexColor, numberOfColors) {
    return chroma
        .scale(getRange(hexColor)) // get scale for a range of colors
        .mode("lab") // set mode: lightness ab
        .colors(numberOfColors); // will generate number of colors
}

export { generatePalette };
