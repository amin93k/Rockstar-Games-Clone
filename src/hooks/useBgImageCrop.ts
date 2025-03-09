

export default function useBgImageCrop(imageURL: string) {
    if(!imageURL){
        return "/src/assets/RAGE_Technology_Group_Logo.svg.png"
    }    
    const bgImageCrop = imageURL?.replace("/media/", "/media/crop/600/400/")

    return bgImageCrop
}
