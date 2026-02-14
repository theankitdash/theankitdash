export interface VFXItem {
    id: number;
    title: string;
    description: string;
    type: 'video' | 'image';
    url: string; // URL to image or video
    thumbnail?: string; // Optional thumbnail for videos
}

export const vfxItems: VFXItem[] = [
    {
        id: 1,
        title: "Airplane Render",
        description: "A detailed 3D render animation of an airplane in flight.",
        type: 'video',
        url: "/vfx/Airplane0001-0240.mp4",
    }
];

export const getFeaturedVFX = () => {
    return vfxItems.slice(0, 3);
};
