/**
 * Keeps track of the various tech levels
 */
export enum Tech {
    AGRICULTURE, MEDIEVAL, RENAISSANCE, EARLY_INDUSTRIAL, INDUSTRIAL, 
    POST_INDUSTRIAL, HI_TECH
}

/**
 * Gets a random resource
 * @return the random resource
 */
export function getRandomTech(): Tech {
    const resourceNames =
    Object.keys(Tech).filter(k => typeof Tech[k as any]
        === 'number');
    const techName = resourceNames[Math.ceil(resourceNames.length * 
        Math.random())];
    const output: Tech = Tech[techName];
    return output;
}
