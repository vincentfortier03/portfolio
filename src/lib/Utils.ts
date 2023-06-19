
export type MousePosition = {
    x: number,
    y: number,
    z: number
}


export type IntersectionValues = {
    whois: boolean,
    exp: boolean,
    education: boolean,
    connaissances: boolean
}


export type ConnaissancesIntersection = {
    svelte: boolean,
    blazor: boolean,
    html: boolean,
    css: boolean,
    ts: boolean
}

export type connaissancesElementProps = {
    name: string,
    description: string,
    modelName: string,
    reverse: boolean,
    logoScale: number,
    cameraHeight: number
}

export type ExperienceProps = {
    imageSRC: string,
    imageH: string,
    imageAlt: string,
    title: string,
    description: string,
    compagnie: string
}
