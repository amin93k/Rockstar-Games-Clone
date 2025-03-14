

export default function useBgImageCrop(imageURL: string) {
    if(!imageURL){
        return "/assets/RAGE_Technology_Group_Logo.png"
    }    
    const bgImageCrop = imageURL?.replace("/media/", "/media/crop/600/400/")

    return bgImageCrop
}
