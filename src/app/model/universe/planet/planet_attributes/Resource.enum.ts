
/**
 * Resource enum to keep track of resources
 */
export enum Resource {
    NOSPECIALRESOURCES, MINERALRICH, MINERALPOOR, DESERT, LOTSOFWATER, RICHSOIL, POORSOIL,
    RICHFAUNA, LIFELESS, WEIRDMUSHROOMS, LOTSOFHERBS, ARTISTIC, WARLIKE
}

/**
 * Gets a random resource
 * @return the random resource
 */
export function getRandomResource(): Resource {
    const resourceNames =
    Object.keys(Resource).filter(k => typeof Resource[k as any]
        === 'number');

    return Resource[resourceNames[Math.floor(resourceNames.length * 
        Math.random())]];
}
